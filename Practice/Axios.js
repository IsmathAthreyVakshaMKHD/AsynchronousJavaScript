const apiBaseUrl="https://crudcrud.com/api/239a8f7de92342d698e3a0c9d45fa10f/votes";
function handleFormSubmit(event){
    event.preventDefault();
    let votedStudentName=document.getElementById('studentName').value;
    let selectedMonitor=document.getElementById('chooseMonitor').value;
    if(votedStudentName.trim()===''){
        alert('please enter a student name');
        return;
    }
    const voteData={
        studentName:votedStudentName,
        Monitor:selectedMonitor
    };
    
    axios.post(apiBaseUrl,voteData)
    .then(result=>{
        displayVote(result.data);
        updateVoteCounts();
    })
    .catch(error => {
        console.log(error);
    });
}
function displayVote(voteData){
    const votedStudentName=voteData.studentName;
    const selectedMonitor=voteData.Monitor;
    //Votes
    let totalVotesElement=document.getElementById('totalVotes');
    let currentTotalVotes=parseInt(totalVotesElement.innerText.split(':')[1]);
    totalVotesElement.innerText='Total Votes:'+(currentTotalVotes+1);
    //Monitor
    let monitorCountElement=document.getElementById(selectedMonitor+'Count');
    let currentCount=parseInt(monitorCountElement.innerText);
    monitorCountElement.innerText=currentCount+1;
    //Unordered
    let unorderedList=document.getElementById(selectedMonitor+'List');
    let list=document.createElement('li');
    list.innerText=votedStudentName;
    list.setAttribute('vote_id',voteData._id);
    //Delete button
    let deleteElement=document.createElement('button');
    deleteElement.innerText='delete';
    deleteElement.onclick=function(){
        axios.delete(`${apiBaseUrl}/${voteData._id}`)
        .then(()=>
        {
            currentTotalVotes=parseInt(totalVotesElement.innerText.split(':')[1]);
            currentCount=parseInt(monitorCountElement.innerText);
            totalVotesElement.innerText='Total Votes: '+(currentTotalVotes-1);
            monitorCountElement.innerText=currentCount-1;
            unorderedList.removeChild(list);
        })
        .catch((error) => {
            console.log(error)
        });
    };
    list.appendChild(deleteElement);
    unorderedList.appendChild(list);
}
function loadVotes(){
    axios.get(apiBaseUrl)
    .then((response)=>{   
        response.data.forEach(voteData=>{
            displayVote(voteData);
        })
    })
    .catch((error) => {
        console.log(error)
    });
}
function updateVoteCounts()
{
    let totalVotesElement=document.getElementById('totalVotes');
    let sureshCountElement=document.getElementById('sureshCount');
    let deepankCountElement=document.getElementById('deepankCount');
    let abhikCountElement=document.getElementById('abhikCount');
    axios.get(apiBaseUrl)
    .then(response=>{
        const votes=response.data;
        const totalVotes=votes.length;
        const sureshVotes=votes.filter(vote=>vote.Monitor==='suresh').length;
        const deepankVotes=votes.filter(vote=>vote.Monitor==='deepank').length;
        const abhikVotes=votes.filter(vote=>vote.Monitor==='abhik').length;
        totalVotesElement.innerText='Total Votes:'+totalVotes;
        sureshCountElement.innerText=sureshVotes;
        deepankCountElement.innerText=deepankVotes;
        abhikCountElement.innerText=abhikVotes;
    })
    .catch((error) => {
        console.log(error);
    })
}
document.addEventListener('DOMContentLoaded',loadVotes);
