function handleFormSubmit(event)
{
    event.preventDefault();
    let votedStudentName=document.getElementById('studentName').value;
    let selectedMonitor=document.getElementById('chooseMonitor').value;
    if(votedStudentName.trim()==='')
    {
        alert('please enter a student name');
        return;
    }
    let totalVotesElement=document.getElementById('totalVotes');
    let currentTotalVotes=parseInt(totalVotesElement.innerText.split(':')[1]);
    totalVotesElement.innerText='Total Votes:'+(currentTotalVotes+1);
    let monitorCountElement=document.getElementById(selectedMonitor+'Count');
    let currentCount=parseInt(monitorCountElement.innerText);
    monitorCountElement.innerText=currentCount+1;
    let unorderedList=document.getElementById(selectedMonitor+'List');
    let list=document.createElement('li');
    list.innerText=votedStudentName;
    let deleteElement=document.createElement('button');
    deleteElement.innerText='delete';
    deleteElement.onclick=function()
    {
        currentTotalVotes=parseInt(totalVotesElement.innerText.split(':')[1]);
        currentCount=parseInt(monitorCountElement.innerText);
        totalVotesElement.innerText='Total Votes:'+(currentTotalVotes-1);
        monitorCountElement.innerText=currentCount-1;
        unorderedList.removeChild(list);
    }
    list.appendChild(deleteElement);
    unorderedList.append(list);
    document.getElementById('studentName').value='';
}