// lib/index.js
document.addEventListener("deviceready", loadContacts, false);

function loadContacts() {
    console.log("Device is ready. Loading contacts...");
    let options = new ContactFindOptions();
    options.hasPhoneNumber = true;
    options.multiple = true;
    let fields = ["name"];

    navigator.contacts.find(fields, showContacts, onError, options);
}


function showContacts(contacts) {
    console.log(contacts);
    let code = '';
    const contactList = document.getElementById('contactList');

    for (let i = 0; i < contacts.length; i++) {
        let contact = contacts[i];
        if (contact.name && contact.name.formatted && contact.phoneNumbers && contact.phoneNumbers.length > 0) {
            code += `
            <li>
                <a href="#">
                     <img src="img/avatar.png" class="contact-img" />
                    <h1>${contact.name.formatted}</h1>
                    <p>${contact.phoneNumbers[0].value}</p>
                </a>
            </li>
            `;
        }
    }

    contactList.innerHTML = code;
    $(contactList).listview('refresh');
}

function onError(error) {
    alert("Error: " + error);
    console.log("Error: " + error);
    const consoleElement = document.getElementById('console');
    consoleElement.innerHTML = `Error: ${error}`;
}

function ajouterContacte() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name === '' || phone === '') {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const newContact = `
        <li>
            <a href="#">
                <img src="img/avatar.png" class="contact-img" />
                <h1>${name}</h1>
                <p>${phone}</p>
            </a>
        </li>`;

    const contactList = document.getElementById('contactList');
    contactList.insertAdjacentHTML('afterbegin', newContact);

    $(contactList).listview('refresh');

}
