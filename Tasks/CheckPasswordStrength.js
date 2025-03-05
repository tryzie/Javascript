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
        //strengthText.className ="strength strong"
    }else if(score===3 || score===4) {
        strengthText.textContent = "MEDIUM"
        //strengthText.className ="strength medium"
    } else {
        strengthText.textContent = "WEAK"
        //strengthText.className ="strength weak"
    }
}

document.getElementById("password").addEventListener("input", function() {
    checkPasswordStrength(this.value);
} );

