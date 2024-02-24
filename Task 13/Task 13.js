function orderFood()
{
    return new Promise((resolve,reject)=>
    {
        let foodDelivered=Math.random()>0.5;
        if(foodDelivered)
        {
            resolve('Food delivered');
        }
        else
        {
            reject('Food not delivered');
        }
    })
}
function orderDessert()
{
    return new Promise((resolve,reject)=>
    {
        let dessertDelivered=Math.random()>0.5;
        if(dessertDelivered)
        {
            resolve('Dessert delivered');
        }
        else
        {
            reject('Dessert not delivered');
        }
    })
}
orderFood().then((foodMessage)=>
{
    console.log(foodMessage);
    return orderDessert;
}).then((dessertMessage)=>
{
    console.log(dessertMessage);
    console.log("Dream meal fullfilled")
}).catch((error)=>
{
    console.log(error);
    console.log("Dream meal failed");
})