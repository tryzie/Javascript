function findMin(){
    let number = [200, 580, 642, 100, 300];
    let min = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] < min) {
            min = number[i];
        }
    }
    return min;
}

function findMax(){
    let number = [200, 580, 642, 100, 300];
    let max = number[0];
    for (let i = 1; i < number.length; i++) {
        if (number[i] > max) {
            max = number[i];
        }
    }
    return max;
}

function findSum(){
    let number = [200, 580, 642, 100, 300, 76.9];
    let sum = number[0];
    for (let i = 1; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}

function removeDuplicates() {
    let string = ["TX123", "TX456", "TX123", "TX789", "TX456"];
    let finalString = [];

    for (let i = 0; i < string.length; i++) {
        if (!finalString.includes(string[i])) {
            finalString.push(string[i]);
        }
    }
    return finalString;
}


console.log(findMin());
console.log(findMax());
console.log(findSum());
console.log(removeDuplicates());