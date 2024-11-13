function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

function validateInput(input) {
    if (input.value.trim() === "") {
        input.style.borderColor = "red";
    } else {
        input.style.borderColor = "#ccc";
    }
}

function submitForm() {
    const personalInfo = document.getElementById('registration-form').elements;
    const contactInfo = document.getElementById('registration-form-contact').elements;
    const medicalInfo = document.getElementById('registration-form-medical').elements;
    
    let data = {
        firstName: personalInfo["first-name"].value,
        lastName: personalInfo["last-name"].value,
        dob: personalInfo["dob"].value,
        gender: personalInfo["gender"].value,
        email: contactInfo["email"].value,
        phone: contactInfo["phone"].value,
        address: contactInfo["address"].value,
        allergies: medicalInfo["allergies"].value,
        medicalConditions: [],
        medications: medicalInfo["medications"].value,
    };

    for (let checkbox of medicalInfo["conditions"]) {
        if (checkbox.checked) {
            data.medicalConditions.push(checkbox.value);
        }
    }

    for (let key in data) {
        if (data[key] === "" && key !== "allergies" && key !== "medicalConditions" && key !== "medications") {
            alert(`${key} is required.`);
            return;
        }
    }

    console.log("Form submitted:", data);
    alert("Registration successful!");
}
