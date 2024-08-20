const apiBaseUrl="https://crudcrud.com/api/9b4880c340ba4efdb89ddb6fd2a3a3ee/votes";

// Function to handle form submission and save vote data
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    // Get selected monitor and student name
    var selectedMonitor = document.getElementById('chooseMonitor').value;
    var studentName = document.getElementById('studentName').value;
    if (studentName.trim() === '') {
        alert('Please enter a student name.');
        return;
    }
    
    // Create the vote data object
    const voteData = {
        studentName: studentName,
        monitor: selectedMonitor
    };
    // Send POST request to save the vote data
    axios.post(apiBaseUrl, voteData)
        .then(response => {
            displayVote(response.data);
            updateVoteCounts();
        })
        .catch(error => console.log(error));
        document.getElementById('studentName').value = '';
}

// Function to display vote data on the screen
function displayVote(voteData) {
    // Get monitor and student name from the vote data
    const selectedMonitor = voteData.monitor;
    const studentName = voteData.studentName;

    // Update total votes
    var totalVotesElement = document.getElementById('totalVotes');
    var currentTotalVotes = parseInt(totalVotesElement.innerText.split(': ')[1]);
    totalVotesElement.innerText = 'Total Votes: ' + (currentTotalVotes + 1);

    // Update specific monitor's count
    var monitorCountElement = document.getElementById(selectedMonitor + 'Count');
    var currentCount = parseInt(monitorCountElement.innerText);
    monitorCountElement.innerText = currentCount + 1;

    // Add student's name to the respective list
    var list = document.getElementById(selectedMonitor + 'List');
    var listItem = document.createElement('li');
    listItem.textContent = studentName;
    listItem.setAttribute('data-id', voteData._id); // Store the ID of the vote data

    // Add delete button to the list item
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        // Send DELETE request to remove the vote data
        axios.delete(`${apiBaseUrl}/${voteData._id}`)
            .then(() => {
                // Update total count and specific monitor count after deletion
                currentTotalVotes = parseInt(totalVotesElement.innerText.split(': ')[1]);
                currentCount = parseInt(monitorCountElement.innerText);
                currentTotalVotes--;
                totalVotesElement.innerText = 'Total Votes: ' + currentTotalVotes;
                currentCount--;
                monitorCountElement.innerText = currentCount;

                // Remove the list item from the list
                list.removeChild(listItem);
            })
            .catch(error => console.log(error));
    };
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
}

// Function to load votes from the server and display them
function loadVotes() {
    
    axios.get(apiBaseUrl)
        .then(response => {
            response.data.forEach(voteData => {
                displayVote(voteData);
            });
        })
        .catch(error => console.log(error));
}

// Function to update vote counts when the page loads
function updateVoteCounts() {
    var totalVotesElement = document.getElementById('totalVotes');
    var sureshCountElement = document.getElementById('sureshCount');
    var deepankCountElement = document.getElementById('deepankCount');
    var abhikCountElement = document.getElementById('abhikCount');
    
    axios.get(apiBaseUrl)
        .then(response => {
            const votes = response.data;
            const totalVotes = votes.length;
            const sureshVotes = votes.filter(vote => vote.monitor === 'suresh').length;
            const deepankVotes = votes.filter(vote => vote.monitor === 'deepank').length;
            const abhikVotes = votes.filter(vote => vote.monitor === 'abhik').length;

            totalVotesElement.innerText = 'Total Votes: ' + totalVotes;
            sureshCountElement.innerText = sureshVotes;
            deepankCountElement.innerText = deepankVotes;
            abhikCountElement.innerText = abhikVotes;
        })
        .catch(error => console.log(error));
}

// Load votes when the page loads
document.addEventListener('DOMContentLoaded', loadVotes);