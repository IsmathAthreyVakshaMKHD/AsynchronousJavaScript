const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/a715fef3040542c99d8025e07732b48d/todo")
  .then((result)=>
  {
    console.log(result);
  }).catch((error)=>
  {
    console.log(error);
  })
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/a715fef3040542c99d8025e07732b48d/todo",{
    title:"Learn Axios",
    completed:false
  }).then((result)=>
  {
    console.log(result);
  }).catch((error)=>
  {
    console.log(error);
  })
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/a715fef3040542c99d8025e07732b48d/todo/65d8895572109f03e8c7e3dd",
  {
    title:"Learn Axios",
    completed:true
  }).then((result)=>
    {
        console.log(result);
    }).catch((error)=>
    {
        console.log(error);
    })
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/a715fef3040542c99d8025e07732b48d/todo/65d8895572109f03e8c7e3dd")
  .then((result)=>
  {
    console.log(result);
  }).catch((error)=>
  {
    console.log(error);
  })
}
