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
                wordsArray.push(word.toLowerCase()); // Convert to lowercase for uniformity
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
    let words = splitSentence(sentence); // Get words as an array
    let result = "";

    if (format.toLowerCase() === "camel") {
        for (let i = 0; i < words.length; i++) {
            if (i === 0) {
                result += words[i]; // First word remains lowercase
            } else {
                result += words[i][0].toUpperCase() + words[i].slice(1);
            }
        }
    }
    else if (format.toLowerCase() === "snake") {
        for (let i = 0; i < words.length; i++) {
            result += words[i];
            if (i < words.length - 1) {
                result += "_"; // Add underscore between words
            }
        }
    }
    else if (format.toLowerCase() === "kebab") {
        for (let i = 0; i < words.length; i++) {
            result += words[i];
            if (i < words.length - 1) {
                result += "-"; // Add hyphen between words
            }
        }
    }
    else if (format.toLowerCase() === "pascal") {
        for (let i = 0; i < words.length; i++) {
            result += words[i][0].toUpperCase() + words[i].slice(1); // Capitalize each word
        }
    }
    else if (format.toLowerCase() === "uppercasesnake") {
        for (let i = 0; i < words.length; i++) {
            result += words[i].toUpperCase();
            if (i < words.length - 1) {
                result += "_"; // Add underscore between words
            }
        }
    }
    else {
        return "Invalid format";
    }

    return result;
}

// Example Usage:
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "camel"));         // Output: yourConclusionIsGoodButTheFinalSentenceIsTooLongAndComplicated
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "snake"));         // Output: your_conclusion_is_good_but_the_final_sentence_is_too_long_and_complicated
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "kebab"));         // Output: your-conclusion-is-good-but-the-final-sentence-is-too-long-and-complicated
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "pascal"));        // Output: YourConclusionIsGoodButTheFinalSentenceIsTooLongAndComplicated
console.log(convert("Your conclusion is good, but the final sentence is too long and complicated.", "uppercasesnake"));// Output: YOUR_CONCLUSION_IS_GOOD_BUT_THE_FINAL_SENTENCE_IS_TOO_LONG_AND_COMPLICATED
