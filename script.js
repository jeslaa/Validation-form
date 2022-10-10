const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const repeatPassword = document.getElementById("repeatPassword")
const checkbox = document.getElementById("checkbox")
const form = document.getElementById("form")

const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/

form.addEventListener('submit', (e) => {
    
    let messages = []
    if(firstName.value === ""){
        console.log("First name is required");
        messages.push("First name is required")
    
    if (firstName.value.length <= 1){
        console.log("First name cannot be less than 2 charachters");
        messages.push("First name cannot be less than 2 charachters")
    }
    
    if(lastName.value === ""){
        console.log("Last name is required");
        messages.push("Last name is required")
    }

    if(password.value.length <= 6){
        console.log("Password needs to be longer than 6 characters");
        messages.push("Password needs to be longer than 6 characters")
    }

    if(repeatPassword.value.length != password.value.length ){
        console.log("Passwords need to match");
        messages.push("Passwords need to match")
    }
    else if(repeatPassword.value.length === password.value.length && repeatPassword.value.length != ""){
        console.log("Passwords are matching");
    }

    // if(checkbox.value != checkbox.value.checked){
    //     console.log("You need to check the checkbox");
    //     messages.push("You need to check the checkbox")
    // }
    // else if(checkbox.value === checkbox.value.checked){
    //     console.log("checkbox is checked");
    // }
    
    // if(messages.length > 0){
    //     e.preventDefault()
    // }
    e.preventDefault()
}
    
})