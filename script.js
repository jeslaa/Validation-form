const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const password = document.getElementById("password")
const repeatPassword = document.getElementById("repeatPassword")
const checkbox = document.getElementById("checkbox")
const form = document.getElementById("form")
const errorMessage = document.getElementById("errorMessage")

//Lyssnar på submit
form.addEventListener('submit', (e) => {
    const email = document.getElementById("email").value
    const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
    const regExName = /^[a-ÖA-Ö\s\-]*$/;
    
    //Pushar errors i arrayen messages
    let messages = []
    if(firstName.value === ""){
        console.log("First name is required");
        messages.push("First name is required")
        
    }
    else if (firstName.value.length <= 1){
        console.log("First name cannot be less than 2 characters");
        messages.push("First name cannot be less than 2 characters")
    }
    //Kollar firstName.value mot regexName för att se till att siffror inte är med och att stora och små bokstäver är tillåtna
    else if (!regExName.test(firstName.value)){
        console.log("First name cannot contain numbers");
        messages.push("First name cannot contain numbers")
    }
   
    if(lastName.value === ""){
        console.log("Last name is required");
        messages.push("Last name is required")
    }
    else if (!regExName.test(lastName.value)){
        console.log("Last name cannot contain numbers");
        messages.push("Last name cannot contain numbers")
    }
    //Validerar email
    if (email.match(regExEmail)){
        console.log("Email is valid");
    }
    else if(email == ""){
        console.log("Email is invalid");
        messages.push("Email is invalid")
    }
    else{
        console.log("Email is invalid");
        messages.push("Email is invalid")
    }

    if(password.value.length < 6){
        console.log("Password needs to be longer than 5 characters");
        messages.push("Password needs to be longer than 5 characters")
    }
    //repeatPassword måste matcha password
    if(repeatPassword.value.length != password.value.length ){
        console.log("Passwords need to match");
        messages.push("Passwords need to match")
    }
    else if(repeatPassword.value.length === password.value.length && repeatPassword.value.length != ""){
        console.log("Passwords are matching");
    }

    if(!this.form.checkbox.checked){
        console.log("You need to check the checkbox");
        messages.push("You need to check the checkbox")
       
    }
    //Preventar formet att submittas om det finns något i arrayen
    if(messages.length > 0){
        e.preventDefault()         
         
     }
     //Skapar ett objekt med users input om inget finns i arrayen messages
    else if (messages.length === 0){
        const user = { 
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.match(regExEmail),
            password: password.value
        }
        console.log("Submitting form");
        console.log(user);
        e.preventDefault()
        
    }

    
})
