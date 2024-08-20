const apiBaseUrl = "https://crudcrud.com/api/d4b1caaa48be446386d4b037bf228ff3/inventoryList";
function handleFormSubmit(event) {
    event.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    
    const inventoryData = { itemName, description, price, quantity };
    //Using async
    async function addInventoryData(inventoryData)
    {
        try
        {
            const result=await axios.post(apiBaseUrl,inventoryData);
            displayData(result.data);
        }
        catch(error)
        {
            console.log(error);
        }
    }
    addInventoryData(inventoryData);
    // axios.post(apiBaseUrl, inventoryData)
    //     .then(result => {
    //         displayData(result.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
}

function displayData(inventoryData) {
    const inventoryList = document.getElementById('inventoryList');
    const listItem = document.createElement('li');
    listItem.id = `item-${inventoryData._id}`;
    listItem.textContent = `${inventoryData.itemName}, ${inventoryData.description}, ${inventoryData.price}, ${inventoryData.quantity}`;
    
    const buyOneButton = document.createElement('button');
    buyOneButton.textContent = 'Buy One';
    buyOneButton.addEventListener('click', () => updateQuantity(inventoryData._id, 1));

    const buyTwoButton = document.createElement('button');
    buyTwoButton.textContent = 'Buy Two';
    buyTwoButton.addEventListener('click', () => updateQuantity(inventoryData._id, 2));

    const buyThreeButton = document.createElement('button');
    buyThreeButton.textContent = 'Buy Three';
    buyThreeButton.addEventListener('click', () => updateQuantity(inventoryData._id, 3));

    listItem.appendChild(buyOneButton);
    listItem.appendChild(buyTwoButton);
    listItem.appendChild(buyThreeButton);
    inventoryList.appendChild(listItem);
}

function updateQuantity(id, quantityToBuy) {
    async function getInventoryData(id)
    {
        try
        {
            const response=await axios.get(`${apiBaseUrl}/${id}`);
            const inventoryData = response.data;
            const newQuantity = inventoryData.quantity - quantityToBuy;
            
            if (newQuantity < 0) {
                alert('Not enough quantity available');
                return;
            }
            
            const updatedData = { ...inventoryData, quantity: newQuantity };
            delete updatedData._id;  // Remove _id field before sending PUT request

            await axios.put(`${apiBaseUrl}/${id}`,updatedData);

            const listItem = document.getElementById(`item-${id}`);
            listItem.childNodes[0].textContent = `${updatedData.itemName}, ${updatedData.description}, ${updatedData.price}, ${newQuantity}`;
        }
        catch(error)
        {
            console.log(error);
        }
    }
    getInventoryData(id);
    // axios.get(`${apiBaseUrl}/${id}`)
    //     .then(response => {
    //         const inventoryData = response.data;
    //         const newQuantity = inventoryData.quantity - quantityToBuy;
            
    //         if (newQuantity < 0) {
    //             alert('Not enough quantity available');
    //             return;
    //         }
            
    //         const updatedData = { ...inventoryData, quantity: newQuantity };
    //         delete updatedData._id;  // Remove _id field before sending PUT request

    //         axios.put(`${apiBaseUrl}/${id}`, updatedData)
    //             .then(() => {
    //                 const listItem = document.getElementById(`item-${id}`);
    //                 listItem.childNodes[0].textContent = `${updatedData.itemName}, ${updatedData.description}, ${updatedData.price}, ${newQuantity}`;
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
}

function loadData() {
    //Using async
    async function getInventoryData()
    {
        try
        {
            const response=await axios.get(apiBaseUrl);
            const inventoryList = document.getElementById('inventoryList');
            inventoryList.innerHTML = ''; // Clear the list before reloading
            response.data.forEach(inventoryData => {
                displayData(inventoryData);
            });
        }
        catch(error)
        {
            console.log(error);
        }
    }
    getInventoryData();
    // axios.get(apiBaseUrl)
    //     .then(response => {
    //         const inventoryList = document.getElementById('inventoryList');
    //         inventoryList.innerHTML = ''; // Clear the list before reloading
    //         response.data.forEach(inventoryData => {
    //             displayData(inventoryData);
    //         });
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     });
}

document.addEventListener('DOMContentLoaded', loadData);