function writeLetter(callBack)
{
    setTimeout(console.log("Wrote Letter"),2000);
    callBack();
}
function postLetter()
{
    setTimeout(console.log("Letter Posted"),1000);
}
writeLetter(postLetter);