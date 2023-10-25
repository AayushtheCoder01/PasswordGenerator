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

    let numbers = ["0","1","2","3","4","5","6","7","8","9"];
    let special_char = ['!', '@', '#', '$', '%', '^', '&', '*'];


    function containsNumberLoop() {
        for (let i = 0; i < splitted_input.length; i++) {
            let included_num = numbers[i]
          if (splitted_input.includes(included_num)) {
            return true;
          }
        }
      }
    function containsSpecialCharLoop() {
        for (let i = 0; i < splitted_input.length; i++) {
            let included_char = special_char[i]
          if (splitted_input.includes(included_char)) {
            return true;
          }
        }
      }

    if (splitted_input.length <= 6) {
        password_type = "weak"
        password_checker_para.style.color = "red"
    }
    let conatins_num = containsNumberLoop()
    if (splitted_input.length > 6 && conatins_num === true) {
        password_type = "moderate"
        password_checker_para.style.color = "orange"

    }
    let contains_special_char = containsSpecialCharLoop()
    if (splitted_input.length > 9  && conatins_num === true && contains_special_char === true) {
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
