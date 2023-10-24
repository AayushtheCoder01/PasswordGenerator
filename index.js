// event listener for generate passwore button.

let generate_pass_btn = document.querySelector(".generate-pass-btn")
generate_pass_btn.addEventListener("click", function (e) {
    password_checker_para.innerText = ""
    pass_checker.style.display = "none"
    pass_gen.style.display = "block"
})


// event listener for password strenght checker.

let password_strength_btn = document.querySelector(".password-strength-btn")
password_strength_btn.addEventListener("click", function(e) {
    pass_gen.style.display = "none"
    password_para.innerText = ""
    password_para.style.display = "none"

    pass_checker.style.display = "flex"
})

//function for checking the password strength.
function check_strength() {
    let input = document.querySelector("input").value;
    let splitted_input = input.split("")

    let password_type = ""

    if (splitted_input.length <= 5) {
        password_type = "weak"
        password_checker_para.style.color = "red"
    }
    if (splitted_input.length > 5) {
        password_type = "moderate"
        password_checker_para.style.color = "orange"

    }
    if (splitted_input.length > 7) {
        password_type = "strong"
        password_checker_para.style.color = "green"
    }

    password_checker_para.innerText = password_type
}

document.addEventListener("keydown", function(e) {
    check_strength()
})








// hiding elements for the first view.
let password_para = document.querySelector(".password-p")
password_para.style.display = "none"

let password_checker_para = document.querySelector(".password-checker-para")


let pass_checker = document.querySelector(".pass-checker")
pass_checker.style.display = "none"

let pass_gen = document.querySelector(".pass-gen")
pass_gen.style.display = 'none'

// const for the words
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const length = 10;

// function fo generating the password.
function generatePassword() {
    password = ""
    
    // creating a loop 
    for (let i = 0; i<length; i++) {
        let random_index = Math.floor(Math.random() * charset.length)
        password += charset.charAt(random_index)
    }

    // returning the password.
    return password
}

// function for displaying the password.
function displayPassword() {
    let password = generatePassword()

    // injecting the password.
    password_para.innerText = `Password: ${password}`

    // displaying the paragraph element.
    password_para.style.display = "block"
}