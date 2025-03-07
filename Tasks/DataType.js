function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === "number";
}
function isBoolean(value) {
    try {
        let parsed = JSON.parse(value.toLowerCase());
        return typeof parsed === "boolean";
    } catch {
        return false;
    }
}
function isUndefined(value) {
    return value === 'undefined';
}
function isNull(value) {
    return value === 'null';
}
function isArray(value) {
    try {
        return JSON.parse(value) instanceof Array;
    } catch {
        return false;
    }
}
function isObject(value) {
    try {
        let parsed = JSON.parse(value);
        return typeof parsed === 'object' && !Array.isArray(parsed) && parsed !== null;
    } catch {
        return false;
    }
}
function isFunction(value) {
    return false; // Can't determine function from string input
}

function checkDataType() {
    let inputValue = document.getElementById("dataInput").value;
    let resultElement = document.getElementById("dataTypeResult");

    let parsedValue;

    // Try converting to number, boolean, null, or object
    if (!isNaN(inputValue) && inputValue.trim() !== "") {
        parsedValue = Number(inputValue); // Convert to Number
    } else if (inputValue.toLowerCase() === "true" || inputValue.toLowerCase() === "false") {
        parsedValue = inputValue.toLowerCase() === "true"; // Convert to Boolean
    } else if (inputValue.toLowerCase() === "null") {
        parsedValue = null; // Convert to Null
    } else {
        try {
            parsedValue = JSON.parse(inputValue); // Try parsing objects or arrays
        } catch {
            parsedValue = inputValue; // Keep as String if nothing else works
        }
    }

    let result;

    if (isString(parsedValue)) {
        result = "String";
    } else if (isNumber(parsedValue)) {
        result = "Number";
    } else if (isBoolean(parsedValue)) {
        result = "Boolean";
    } else if (isUndefined(parsedValue)) {
        result = "Undefined";
    } else if (isNull(parsedValue)) {
        result = "Null";
    } else if (isArray(parsedValue)) {
        result = "Array";
    } else if (isObject(parsedValue)) {
        result = "Object";
    } else if (isFunction(parsedValue)) {
        result = "Function";
    } else {
        result = "Unknown Type";
    }

    resultElement.innerText = ` ${result}`;
}



// function isString(value){
//     return typeof(value) === 'string'
//
// }
// function isNumber(value) {
//     return typeof(value) === 'number'
//
// }
// function isBoolean(value) {
//     return typeof (value) === 'boolean'
//
// }
// function isUndefined(value) {
//     return typeof(value) === 'undefined'
//
// }
// function isNull(value) {
//     return value === null
//
// }
// function isArray(value) {
//     return Array.isArray(value)
//
//
// }
// function isObject(value) {
//     return value !== null && typeof value === 'object' && !Array.isArray(value);
// }
//
// function isFunction(value){
//     return typeof (value) === 'function'
//
// }
//
// console.log("==========================================");
// console.log("STRINGS")
// console.log("==========================================");
// console.log("isString('colloh')", isString('colloh'));
//
// console.log("isString(1)", isString(1));
//
// console.log("isString([])", isString([]));
//
// console.log("isString(true)", isString(true));
//
// console.log("isString(null)", isString(null));
//
// console.log("isString({name: 'collins'})", isString({name: 'collins'}));
//
// console.log("isString(isFunction)", isString( isFunction));
//
// console.log("==========================================");
// console.log("NUMBERS")
// console.log("==========================================");
// console.log("isNumber(3)", isNumber(3));
//
// console.log("isNumber('james')", isNumber('james'));
//
// console.log("isNumber([])", isNumber([]));
//
// console.log("isNumber(true)", isNumber(true));
//
// console.log("isNumber(null)", isNumber(null));
//
// console.log("isNumber({name: 'james'})", isNumber({name: 'james'}));
//
// console.log("isNumber(isFunction)", isNumber(isFunction));
//
// console.log("==========================================");
// console.log("Boolean")
// console.log("==========================================");
//
// console.log("isBoolean(false)", isBoolean(false));
//
// console.log("isBoolean(1)", isBoolean(1));
//
// console.log("isBoolean('raq')", isBoolean('raq'));
//
// console.log("isBoolean( )", isBoolean( ));
//
// console.log("isBoolean([])", isBoolean([]));
//
// console.log("isBoolean({name: 'raq'})", isBoolean({name : 'raq'}));
//
// console.log("isBoolean(isFunction)", isBoolean(isFunction));
//
// console.log("==========================================");
// console.log("UNDEFINED")
// console.log("==========================================");
//
//
// console.log("isUndefined([1,2])", isUndefined([1,2]));
//
// console.log("isUndefined('john')", isUndefined('JOHN'));
//
// console.log("isUndefined(1)", isUndefined(1));
//
// console.log("isUndefined()", isUndefined());
//
// console.log("isUndefined(true)", isUndefined(true));
//
// console.log("isUndefined({name: 'john' })", isUndefined({name: 'john'}));
//
// console.log("isUndefined(isFunction)", isUndefined(isFunction));
//
//
// console.log("==========================================");
// console.log("ARRAY")
// console.log("==========================================");
//
// console.log("isArray([1,2])", isArray([1,2]));
//
// console.log("isArray('john')", isArray('JOHN'));
//
// console.log("isArray(1)", isArray(1));
//
// console.log("isArray()", isArray());
//
// console.log("isArray(true)", isArray(true));
//
// console.log("isArray({name: 'john' })", isArray({name: 'john'}));
//
// console.log("isArray(isFunction)", isArray(isFunction));
//
//
// console.log("==========================================");
// console.log("OBJECT")
// console.log("==========================================");
//
// console.log("isObject([1,2])", isObject([1,2]));
//
// console.log("isObject('john')", isObject('JOHN'));
//
// console.log("isObject(1)", isObject(1));
//
// console.log("isObject()", isObject());
//
// console.log("isObject(true)", isObject(true));
//
// console.log("isObject({name: 'john' })", isObject({name: 'john'}));
//
// console.log("isObject(isFunction)", isObject(isFunction));
//
//
// console.log("==========================================");
// console.log("FUNCTION")
// console.log("==========================================");
//
// console.log("isFunction(() => {})", isFunction(() => {}));
//
// console.log("isFunction([1,2])", isFunction([1,2]));
//
// console.log("isFunction('john')", isFunction('JOHN'));
//
// console.log("isFunction(1)", isFunction(1));
//
// console.log("isFunction()", isFunction());
//
// console.log("isFunction(true)", isFunction(true));
//
// console.log("isFunction({name: 'john' })", isFunction({name: 'john'}));
//
//
// console.log(isFunction(function (){}));

