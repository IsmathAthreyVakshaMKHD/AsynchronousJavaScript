async function happyMeal()
{
    try
    {
        const promiseOne=await new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                const pizzaDelivered=Math.random()>0.5;
                if(pizzaDelivered)
                {
                    resolve("Pizza has been delivered!");
                }
                else
                {
                    reject("Pizza delivery failed.");
                }
            },2000);
        });
        const promiseTwo=await new Promise((resolve,reject)=>
        {
            setTimeout(()=>
            {
                const dessertDelivered=Math.random()>0.5;
                if(dessertDelivered)
                {
                    resolve("Dessert has been delivered!");
                }
                else
                {
                    reject("Dessert delivery failed.");
                }
            },1000);
        })
        console.log(promiseOne);
        console.log(promiseTwo);
    }
    catch(error)
    {
        console.log(error);
    }
}
happyMeal();