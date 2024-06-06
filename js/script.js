// Ini JavaScript

let nameInput = document.getElementById('nama-input')

document.getElementById('kirim').addEventListener("click", function() {
    const nama = nameInput.value

    if (name == "") {
        document.getElementById("error-name").innerHTML = "Nama Tidak Boleh Kosong!"
    } else {
    document.getElementById('name').innerHTML = nama
    }
})


function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = documentforms["messsage-forms"]["birth-date"].value;
    const gender = documentforms["messsage-forms"]["gender"].value;
    const messages = documentforms["messsage-forms"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, birthDate, gender, messages);

    return false;
}