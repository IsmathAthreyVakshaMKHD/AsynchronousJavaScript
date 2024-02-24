function concertPassPromise()
{
    return new Promise((resolve,reject)=>
    {
        const flag=Math.random()>0.5;
        if(flag)
        {
            resolve('Pass received');
        }
        else
        {
            reject('Pass not received');
        }
    });
}
concertPassPromise()
    .then((result)=>
    {
        console.log(result);
    })
    .catch((error)=>
    {
        console.log(error);
    })