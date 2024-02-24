function loanSanctionPromise()
{
    return new Promise((resolve,reject)=>
    {
        const flag=Math.random()>0.5;
        if(flag)
        {
            resolve("Loan sanctioned");
        }
        else
        {
            reject("Loan not sanctioned");
        }
    });
}
loanSanctionPromise()
    .then((result)=>
    {
        console.log(result);
    })
    .catch((error)=>
    {
        console.log(error);
    });