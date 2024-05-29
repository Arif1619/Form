const scriptURL ="https://script.google.com/macros/s/AKfycbyY0dOxHWGTmQApCURAqdEwkvMkqEl4h5TgEMc-7WwrjBQFNqxHSD8w4kdy9PY6DOoVqg/exec"
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted successfully"))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!, error.message'))
})




