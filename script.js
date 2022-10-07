const form = document.getElementById('regForm')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const terms = document.getElementById('terms')
const btn = document.getElementById('submit')

let count = 0

form.addEventListener('submit', e => {
    e.preventDefault()
})

