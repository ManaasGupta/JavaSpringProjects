const formEle = document.getElementById("myform");
formEle.addEventListener("submit", ev => {
    ev.preventDefault();

    const hiddenBlock = document.getElementById("hiddenInfo")
    hiddenBlock.classList.remove("d-none")

    const selectedValue = document.getElementById("sort").value;
    const valueName = document.getElementById("myInput").value;

    console.log(selectedValue);
    console.log(valueName);
    let apiUrl;
    switch (selectedValue) {
        case "personId":
            apiUrl = "http://localhost:9090/api/person/" + valueName;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    getResultById(data);
                })
                .catch(err => {
                    console.error(err);
                });
            break;

        case "firstName":
            apiUrl = "http://localhost:9090/api/person/firstName/" + valueName;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    displayData(data);

                })
                .catch(err => {
                    console.error(err);
                });
            break;
        case "lastName":
            apiUrl = "http://localhost:9090/api/person/lastName/" + valueName;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    displayData(data);
                })
                .catch(err => {
                    console.error(err);
                });
            break;
        case "email":
            apiUrl = "http://localhost:9090/api/person/emailLike/" + valueName;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    displayData(data);
                })
                .catch(err => {
                    console.error(err);
                });
            break;
        case "contactNumber":
            apiUrl = "http://localhost:9090/api/person/contactLike/" + valueName;
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    displayData(data);
                })
                .catch(err => {
                    console.error(err);
                });
            break;
        default:
            console.error("NOT VALID OPTION");
            break;
    }
});


function displayData(data) {
    const tableBody = document.getElementById("tableBody");
    for (i = 0; i < data.length; i++) {
        const record = data[i];
        const row = document.createElement("tr");
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
        tableBody.appendChild(row);
    }
}


const returnHome = document.getElementById("returnHome");
returnHome.addEventListener("click", home)
function home() {
    window.location.href = "http://localhost:5500/index.html"
}

const restTable = document.getElementById("restTbody")
restTable.addEventListener("click", clearTable)

function clearTable() {
    // Code to clear the table (replace this with your logic)
    const hiddenBlock = document.getElementById("hiddenInfo")
    hiddenBlock.classList.add("d-none")
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = ""; // Clear table content
    console.log("Table cleared!");
}

function getResultById(data) {
    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");
    let cellDataId = document.createElement("td")
    let cellDataFirstName = document.createElement("td");
    let cellDataLastName = document.createElement("td");
    let cellDataEmail = document.createElement("td");
    let cellDataContactNumber = document.createElement("td");

    // Adding Values to cells
    cellDataId.textContent = data.personId;
    cellDataFirstName.textContent = data.firstName;
    cellDataLastName.textContent = data.lastName;
    cellDataEmail.textContent = data.email;
    cellDataContactNumber.textContent = data.contactNumber;

    // adding all cells in tr/row
    row.appendChild(cellDataId);
    row.appendChild(cellDataFirstName);
    row.appendChild(cellDataLastName);
    row.appendChild(cellDataEmail);
    row.appendChild(cellDataContactNumber);

    // addig row to tbody
    tableBody.appendChild(row);
}