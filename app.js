"use strict";
//export {}
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const btn = document.getElementById('btn');
const textResults = []; //Array is generic
const numResults = [];
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + '' + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResults(resultObj) {
    console.log(resultObj.val);
}
btn.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = sum(+num1, +num2);
    const stringResult = sum(num1, num2);
    textResults.push(stringResult);
    numResults.push(result);
    console.log(result);
    console.log(stringResult);
    printResults({ val: result, timestamp: new Date() });
    console.log(textResults);
    console.log(numResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It worked!!');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split(' '));
});
