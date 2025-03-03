
function splitSentence(sentence) {
   let wordsArray = [];
   let word = "";

    for (let i = 0; i < sentence.length; i++) {
        char = sentence[i];

        if (char>= "A" && char<="Z" ||
            char>= "a" && char<="z" ||
            char>= "0" && char<="9"
        ) {
            word += char;
        } else {
            if (word.length > 0) {
                wordsArray.push(word.toLowerCase());
                word ="";
            }
        }
    }
    if (word.length > 0) {
        wordsArray.push(word.toLowerCase());
    }
    return wordsArray;
}
console.log(splitSentence("jame is a good boy"));

function reverseString(text) {
    text = splitSentence(text);
    let  reversedWords = [];

    for (let i = 0; i < text.length; i++) {
        let reversedWord = "";

        for (let j = text[i].length - 1; j >= 0; j--) {
            reversedWord += text[i][j];
        }
        reversedWords.push(reversedWord);

    }
    return  reversedSentence = reversedWords.join(' ');

}

function numberOfVowels(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        char = text[i].toLowerCase();
        if (char==="a"|| char==="e"|| char==="i" || char==="o" || char==="u" ) {
            count++;
        }
    }
    return count;
}

function truncateWords(text, number) {
   let  truncatedWord ="";
    for (let i = 0; i < number && i<text.length; i++) {
        if (text[i] !== " ") {
        truncatedWord += text[i];
    }
    }
    if (text.length > number) {
        truncatedWord += "...";
    }
    return truncatedWord;
}

console.log(reverseString("Jame is a good boy"));
console.log(numberOfVowels("Jame is a good boy"));
console.log(truncateWords("                  Jame                                 is a good boy", 9));