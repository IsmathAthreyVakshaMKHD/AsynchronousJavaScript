function handleFormSubmit(event) 
        {
            event.preventDefault(); // Prevent form submission
            // Get selected monitor and student name
            var selectedMonitor = document.getElementById('chooseMonitor').value;
            var studentName = document.getElementById('studentName').value;
            if (studentName.trim() === '') 
            {
                alert('Please enter a student name.');
                return;
            }
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
            // Add delete button to the list item
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() 
            {
                // Update total count and specific monitor count after deletion
                currentTotalVotes = parseInt(totalVotesElement.innerText.split(': ')[1]);
                currentCount = parseInt(monitorCountElement.innerText);
                currentTotalVotes--;
                totalVotesElement.innerText = 'Total Votes: ' + currentTotalVotes;
                currentCount--;
                monitorCountElement.innerText = currentCount;
                // Remove the list item from the list
                list.removeChild(listItem);
            };
            listItem.appendChild(deleteButton);
            // Append the list item to the list
            list.appendChild(listItem);
            // Clear input fields
            document.getElementById('studentName').value = '';
        }

