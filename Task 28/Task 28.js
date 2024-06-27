// Write your code below:
function handleFormSubmit(event) {
    window.addEventListener("DOMContentLoaded",()=>
    {
        axios.put("https://crudcrud.com/api/b622c78ed2504e75a133de1674f7a789/dataPoint/666ea44319f3e403e81e3266")
    }).then((result)=>
    {
        console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    })
}



