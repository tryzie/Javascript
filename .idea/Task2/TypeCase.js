function splitSentence(sentence) {
    let wordsArray = [];
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Check if the character is a letter or a number
        if ((char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9')) {
            word += char; // Build the word
        } else {
            if (word.length > 0) {
                wordsArray.push(word.toLowerCase()); // Convert to lowercase
                word = ""; // Reset word
            }
        }
    }

    if (word.length > 0) {
        wordsArray.push(word.toLowerCase());
    }

    return wordsArray;
}

function convert(sentence, format) {
    let words = splitSentence(sentence);
    let result = "";

    if (format.toLowerCase() === "camel") {
        for (let i = 0; i < words.length; i++) {
            if (i === 0) {
                result += words[i];
            } else {
                result += words[i][0].toUpperCase() + words[i].slice(1);
            }
        }
    }
    else if (format.toLowerCase() === "snake") {
        for (let i = 0; i < words.length; i++) {
            result += words[i];
            if (i < words.length - 1) {
                result += "_";
            }
        }
    }
    else if (format.toLowerCase() === "kebab") {
        for (let i = 0; i < words.length; i++) {
            result += words[i];
            if (i < words.length - 1) {
                result += "-";
            }
        }
    }
    else if (format.toLowerCase() === "pascal") {
        for (let i = 0; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].slice(1);
        }
    }
    else if (format.toLowerCase() === "uppercasesnake") {
        for (let i = 0; i < words.length; i++) {
            result += words[i].toUpperCase();
            if (i < words.length - 1) {
                result += "_";
            }
        }
    }
    else {
        return "Invalid format";
    }

    return result;
}

console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "camel"));
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "snake"));
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "kebab"));
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "pascal"));
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "uppercasesnake"));
