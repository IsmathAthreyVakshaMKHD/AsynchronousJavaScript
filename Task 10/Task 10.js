function buyBike()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            resolve("Bought Royal Enfield Himalayan");
        },2000);
    })
}
function planTrip()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            resolve("Trip to Ladakh planned");
        },1000);
    })
}
function reachLadakh()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            resolve("Reached Ladakh");
        },1000);
    })
}
function visitPangongLake()
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(function()
        {
            resolve("Visited Pangong Lake");
        },500);
    })
}
buyBike().then((result)=>
{
    console.log(result);
    planTrip().then((result)=>
    {
        console.log(result);
        reachLadakh().then((result)=>
        {
            console.log(result);
            visitPangongLake().then((result)=>
            {
                console.log(result);
            })
        })
    })
})