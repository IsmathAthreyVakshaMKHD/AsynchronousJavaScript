// Write your code below:
function handleFormSubmit(event) {
    axios.post("https://crudcrud.com/api/b622c78ed2504e75a133de1674f7a789/dataPoint", formData)
    .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
    axios.put("https://crudcrud.com/api/b622c78ed2504e75a133de1674f7a789/dataPoint/666ea44319f3e403e81e3266")
    .then((result)=>
    {
        console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    })
    axios.delete("https://crudcrud.com/api/b622c78ed2504e75a133de1674f7a789/dataPoint/666ea44319f3e403e81e3266")
    .then((result)=>
    {
        console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    })
}

