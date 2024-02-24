function buyBike(callBack)
{
    setTimeout(console.log("Bought Royal Enfield Himalayan"),2000);
    callBack();
}
function planTrip()
{
    setTimeout(console.log("Trip to Ladakh planned"),1000);
}
buyBike(planTrip);