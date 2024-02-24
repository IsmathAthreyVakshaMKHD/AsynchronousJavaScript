function checkCar()
{
    return new Promise((resolve,reject)=>
    {
        let inspect=Math.random()>0.5;
        setTimeout(function()
            {
                if(inspect)
                {
                    resolve("Car is ready");
                }
                else
                {
                    reject("Error: Car needs maintenance");
                }        
            },2000);
    })
}
function packForPicnic()
{
    return new Promise((resolve,reject)=>
    {
        let pack=Math.random()>0.5;
        setTimeout(function()
        {
            if(pack)
            {
                resolve("Packed everthing for picnic");
            }
            else
            {
                reject("Error: Not have some essentials");
            }
        },1000)
    })
}
checkCar().then((Inspection)=>
{
    console.log(Inspection);
    return packForPicnic();
}).then((Packed)=>
{
    console.log(Packed);
    console.log('Go for picnic');
}).catch((error)=>
{
    console.log(error);
    console.log("Picnic cancelled");
})