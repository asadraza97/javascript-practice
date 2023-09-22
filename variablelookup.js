// Variable lookup
// { } code block

// const globalNumber = 5;

// function add(num1, num2){
//     const result = num1 + num2 + globalNumber;
//     return result;
// }
// console.log(add(3, 4))


// const globalNumber = 5;

// function add(num1, num2){
//     const result = num1 + num2 + globalNumberOne;
//     return result;
// }
// console.log(add(3, 4))


// const globalNumber = 5;

// function add(num1, num2){
//     const globalNumber = 20;
//     const result = num1 + num2 + globalNumber;
//     return result;
// }
// console.log(add(3, 4))


// const globalNumber = 5;

// function add(num1, num2){
//     const globalNumber = 20;
//     const result = num1 + num2 + globalNumber;
//     function multiply() {
//         const multiplyResult = result * globalNumber;
//         console.log(multiplyResult);
//     }
//     multiply();
//     return result;
// }
// console.log(add(3, 4))

const globalNumber = 5;

function add(num1, num2){
    const globalNumber = 20;
    const result = num1 + num2 + globalNumber;
    function multiply() {
        const globalNumber = 100;
        const multiplyResult = result * globalNumber;
        console.log(multiplyResult);
    }
    multiply();
    return result;
}
console.log(add(3, 4))