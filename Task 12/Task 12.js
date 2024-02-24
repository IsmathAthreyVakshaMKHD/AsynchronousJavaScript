function checkWeather()
{
    return new Promise((resolve,reject)=>
    {
        let weather=Math.random()>0.5;
        if(weather)
        {
            resolve("Let us go for picnic");
        }
        else
        {
            reject("Error:It is cloudy");
        }
    })
}
checkWeather().then((result)=>
{
    console.log(result);
}).catch((error)=>
{
    console.log(error);
});