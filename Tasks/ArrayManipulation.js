function findMin(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findSum(numbers) {
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function removeDuplicates(strings) {
    let finalArray = [];

    for (let i = 0; i < strings.length; i++) {
        if (!finalArray.includes(strings[i])) {
            finalArray.push(strings[i]);
        }
    }
    return finalArray;
}

function performOperation() {
    let userInput = document.getElementById("userInput").value.trim();
    let selectedOperation = document.getElementById("operation").value;
    let result = "";

    if (selectedOperation === "removeDuplicates") {
        let stringArray = userInput.split(",").map(str => str.trim());
        result = removeDuplicates(stringArray).join(", ");
    } else {
        let numberArray = userInput.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

        if (numberArray.length === 0) {
            result = "Invalid input! Please enter valid numbers.";
        } else {
            if (selectedOperation === "min") {
                result = findMin(numberArray);
            } else if (selectedOperation === "max") {
                result = findMax(numberArray);
            } else if (selectedOperation === "sum") {
                result = findSum(numberArray);
            }
        }
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}



// function findMin(){
//     let number = [200, 580, 642, 100, 300];
//     let min = number[0];
//     for (let i = 1; i < number.length; i++) {
//         if (number[i] < min) {
//             min = number[i];
//         }
//     }
//     return min;
// }
//
// function findMax(){
//     let number = [200, 580, 642, 100, 300];
//     let max = number[0];
//     for (let i = 1; i < number.length; i++) {
//         if (number[i] > max) {
//             max = number[i];
//         }
//     }
//     return max;
// }
//
// function findSum(){
//     let number = [200, 580, 642, 100, 300, 76.9];
//     let sum = number[0];
//     for (let i = 1; i < number.length; i++) {
//         sum += number[i];
//     }
//     return sum;
// }
//
// function removeDuplicates() {
//     let string = ["TX123", "TX456", "TX123", "TX789", "TX456"];
//     let finalString = [];
//
//     for (let i = 0; i < string.length; i++) {
//         if (!finalString.includes(string[i])) {
//             finalString.push(string[i]);
//         }
//     }
//     return finalString;
// }
//
//
// console.log(findMin());
// console.log(findMax());
// console.log(findSum());
// console.log(removeDuplicates());