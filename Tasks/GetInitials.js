//
// function splitSentence(sentence) {
//     /*
//     * create a string variable and an array variable
//     */
//     let wordsArray = [];
//     let word = "";
//
//     //Iterate through each character in sentence
//     for (let i = 0; i < sentence.length; i++) {
//         //get the current character
//         let char = sentence[i];
//
//         // Check if the character is a letter or a number
//         if ((char >= 'a' && char <= 'z') ||
//             (char >= 'A' && char <= 'Z') ||
//             (char >= '0' && char <= '9')) {
//             word += char; // Build the word
//         } else {
//             if (word.length > 0) {
//                 wordsArray.push(word.toLowerCase());
//                 word = ""; // Reset word
//             }
//         }
//     }
//
//     // Push the last word if it exists
//     if (word.length > 0) {
//         wordsArray.push(word.toLowerCase());
//     }
//
//     //return an array of the words
//     return wordsArray;
// }
//
// console.log(splitSentence("collo is happy"));
//
// function getInitials(sentence) {
//     let words = splitSentence(sentence);
//     let results = "";
//     for (let i = 0; i < words.length; i++) {
//             results += words[i].charAt(0).toUpperCase() ;
//     }
//     return results;
// }
//
// console.log(getInitials("collo is happy"));
// console.log(getInitials("John Doe"));
// console.log(getInitials("Martin Luther     kinG"));
// console.log(getInitials("Harry"));
// console.log(getInitials("Hermione Granger"));
//
// console.log(getInitials(""));
// console.log(getInitials(6));
// console.log(getInitials("[]"));
// console.log(getInitials("martin: Luther"));


function splitSentence(sentence) {
    let wordsArray = [];
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if ((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')) {
            word += char;
        } else {
            if (word.length > 0) {
                wordsArray.push(word);
                word = "";
            }
        }
    }

    if (word.length > 0) {
        wordsArray.push(word);
    }

    return wordsArray;
}

function getInitials(sentence) {
    if (typeof sentence !== "string" || sentence.trim() === "") {
        return "Invalid input!";
    }

    let words = splitSentence(sentence);
    let initials = "";

    for (let i = 0; i < words.length; i++) {
        initials += words[i].charAt(0).toUpperCase();
    }

    return initials || "No initials found!";
}

function generateInitials() {
    let userInput = document.getElementById("userInput").value;
    let result = getInitials(userInput);
    document.getElementById("result").textContent = `Initials: ${result}`;
}
