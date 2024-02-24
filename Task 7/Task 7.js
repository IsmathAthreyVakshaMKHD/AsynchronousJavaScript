function bookSearchPromise()
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(function()
        {
            const flag=Math.random()>0.5;
            if(flag)
            {
                resolve("Book Found");
            }
            else
            {
                reject("Book not found");
            }
        },3000)
    });
}
bookSearchPromise()
    .then((result)=>
    {
        console.log(result);
    })
    .catch((error)=>
    {
        console.log(error);
    });