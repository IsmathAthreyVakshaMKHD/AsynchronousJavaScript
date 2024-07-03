// const apiBaseUrl="https://crudcrud.com/api/c7aa685faab94aad95d23c3651c296e6/inventoryList";
// function handleFormSubmit(event)
// {
//     event.preventDefault();
//     let itemNameElement=document.getElementById('itemName').value;
//     let descriptionElement=document.getElementById('description').value;
//     let priceElement=document.getElementById('price').value;
//     let quantityElement=parseInt(document.getElementById('quantity').value);
//     const inventoryData={
//         itemName:itemNameElement,
//         description:descriptionElement,
//         price:priceElement,
//         quantity:quantityElement
//     };
//     axios.post(apiBaseUrl,inventoryData)
//     .then(result=>{
//         displayData(result.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }
// function displayData(inventoryData)
// {
//     let itemNameElement=inventoryData.itemName;
//     let descriptionElement=inventoryData.description;
//     let priceElement=inventoryData.price;
//     let quantityElement=inventoryData.quantity;
//     //Unorderedlist
//     let unorderedListElement=document.getElementById('inventoryList');
//     let listElement=document.createElement('li');
//     listElement.textContent=`${itemNameElement}, ${descriptionElement}, ${priceElement}, ${quantityElement}`;
//     //Buy Button
//     let buyOneElement=document.createElement('button');
//     buyOneElement.textContent='BuyOne';
//     buyOneElement.addEventListener('click', () => updateQuantity(inventoryData, 1));
//     let buy2Element=document.createElement('button');
//     buy2Element.textContent='Buy2';
//     buy2Element.addEventListener('click', () => updateQuantity(inventoryData, 2));
//     let buy3Element=document.createElement('button');
//     buy3Element.textContent='Buy3';
//     buy3Element.addEventListener('click', () => updateQuantity(inventoryData, 3));

//     listElement.appendChild(buyOneElement);
//     listElement.appendChild(buy2Element);
//     listElement.appendChild(buy3Element);
//     unorderedListElement.appendChild(listElement);
// }

// function updateQuantity(inventoryData, quantity) {
//     const newQuantity = inventoryData.quantity - quantity;
//     if (newQuantity < 0) {
//         alert('Not enough quantity available');
//         return;
//     }
    
//     const updatedData = { ...inventoryData, quantity: newQuantity };

//     axios.put(`${apiBaseUrl}/${inventoryData._id}`, updatedData)
//     .then(response => {
//         // Update the display
//         loadData();
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// function loadData(){
//     axios.get(apiBaseUrl)
//     .then((response)=>{   
//         response.data.forEach(voteData=>{
//             displayData(voteData);
//         })
//     })
//     .catch((error) => {
//         console.log(error)
//     });
// }
// document.addEventListener('DOMContentLoaded',loadData);

