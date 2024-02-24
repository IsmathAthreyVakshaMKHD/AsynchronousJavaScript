const projectorPromise=new Promise((resolve,reject)=>
    {
        let Renting=Math.random()>0.5;
        if(Renting)
        {
            resolve("Projector rented successfully");
        }
        else
        {
            reject("Error: Projectors out of stock");
        }
    });
const pizzasPromise=new Promise((resolve,reject)=>
    {
        let Order=Math.random()>0.5;
        if(Order)
        {
            resolve("Pizzas delivered at time");
        }
        else
        {
            reject("Error: Pizzas not delivered on time");
        }
    });
const friendsPromise=new Promise((resolve,reject)=>
    {
        let Available=Math.random()>0.5;
        if(Available)
        {
            resolve("Both friends available");
        }
        else
        {
            reject("Error: Both friends not available");
        }
    });
Promise.all([projectorPromise,pizzasPromise,friendsPromise])
.then((result)=>
{
    console.log(result);
})
.catch((error)=>
{
    console.log(error);
})