function handleFormSubmit(event) 
{
  window.addEventListener("DomContentLoaded",()=>
  {
    axios.get("https://crudcrud.com/api/bf44b4cd1b904bef84b5711f5a25e689")
    .then((result)=>
    {
        console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    })
  })
}
