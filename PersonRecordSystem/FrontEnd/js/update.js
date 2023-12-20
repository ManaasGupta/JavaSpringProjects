document.addEventListener("DOMContentLoaded", function () {
    const myForm = document.getElementById("personForm");

    myForm.addEventListener("submit", ev => {
        ev.preventDefault();

        const formData = {
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("lastName").value,
            email: document.getElementById("email").value,
            contactNumber: document.getElementById("contactNumber").value
        };

        const personId = document.getElementById("personId").value;

        fetch("http://localhost:9090/api/person/" + personId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.status);
            }
            return response.json(); // Assuming you're working with JSON data
        })
            .then(data => {
                // Process the successful response data here
                console.log(data);

                // Call the flashMessage function
                flashMessage();
            })
            .catch(error => {
                // Handle errors here
                console.error('Fetch error:', error);
            });
    });

    const homeButton = document.getElementById("returnHome");
    homeButton.addEventListener("click", returnHome);

    // Your existing flashMessage function
    function flashMessage() {
        const message = document.getElementById("hiddenMessage");
        message.classList.remove("d-none");
        message.classList.add("d-show")
    }

    // Add this function to hide the message when clicked
    const hideMessageButton = document.getElementById("hideMessage");
    hideMessageButton.addEventListener("click", hideMessage);

    function hideMessage() {
        const message = document.getElementById("hiddenMessage");
        message.classList.add("d-none");
        message.classList.remove("d-show")
    }

    // Your existing returnHome function
    function returnHome() {
        window.location.href = "http://localhost:5500/index.html";
    }
});
