function checkPasswordStrength(password) {

    let score = 0;

    let min_length_regex = /.{8,}/;
    let upperCase_regex = /[A-Z]+/;
    let lowerCase_regex = /[a-z]+/;
    let number_regex = /[0-9]+/;
    let special_character_regex = /[^a-zA-Z0-9]/;


    if (min_length_regex.test(password)) score ++;
    if (upperCase_regex.test(password)) score ++;
    if (lowerCase_regex.test(password)) score ++;
    if (number_regex.test(password)) score ++;
    if (special_character_regex.test(password)) score ++;

    let strengthText = document.getElementById("strengthText");


    if(score === 5) {
        strengthText.textContent = "STRONG"
        console.log("password is Strong");
    }else if(score===3 || score===4) {
        strengthText.textContent = "MEDIUM"
        console.log("password is medium");
    } else {
        strengthText.textContent = "WEAK"
        console.log("password is weak");
    }
}

document.getElementById("password").addEventListener("input", function() {
    checkPasswordStrength(this.value);
} );

