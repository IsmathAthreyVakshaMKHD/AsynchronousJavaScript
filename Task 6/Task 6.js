function learnJavaScript(callBack)
{
    setTimeout(console.log("JavaScript Learned"),2000);
    callBack();
}
function learnReact(callBack)
{
    setTimeout(console.log("React Learned"),1000);
}
learnJavaScript(learnReact);