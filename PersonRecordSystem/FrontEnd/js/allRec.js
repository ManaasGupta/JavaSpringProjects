document.addEventListener("DOMContentLoaded", function () {
    fetch('http://localhost:9090/api/person/')
        .then(response => response.json())
        .then(data => {
            displayRecords(data);
            console.log(data);
        })
        .catch(error => console.error('Error:', error));

    function displayRecords(records) {
        const tableBodyData = document.getElementById("records");
        for (i = 0; i < records.length; i++) {
            let record = records[i];
            let row = document.createElement("tr");
            let cellDataId = document.createElement("td")
            let cellDataFirstName = document.createElement("td");
            let cellDataLastName = document.createElement("td");
            let cellDataEmail = document.createElement("td");
            let cellDataContactNumber = document.createElement("td");

            // Adding Values to cells
            cellDataId.textContent = record.personId;
            cellDataFirstName.textContent = record.firstName;
            cellDataLastName.textContent = record.lastName;
            cellDataEmail.textContent = record.email;
            cellDataContactNumber.textContent = record.contactNumber;

            // adding all cells in tr/row
            row.appendChild(cellDataId);
            row.appendChild(cellDataFirstName);
            row.appendChild(cellDataLastName);
            row.appendChild(cellDataEmail);
            row.appendChild(cellDataContactNumber);

            // addig row to tbody
            tableBodyData.appendChild(row);
        }
    }

})

const homeButton = document.getElementById("returnHome");
homeButton.addEventListener("click", returnHome)
function returnHome() {
    window.location.href = "http://localhost:5500/index.html"
}