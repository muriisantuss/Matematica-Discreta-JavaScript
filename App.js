function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
function twoProducts(v1, v2) {
    if (v2 === 0) {
        return 0;
    }
    return v1 + twoProducts(v1, v2 - 1);
}
function sum(v1, v2) {
    if (v2 === 0) {
        return v1;
    }
    return sum(v1 + 1, v2 - 1);
}
function main() {
    const prompt = require('prompt-sync')();
    let choice;
    do {
        console.log("\n|---------------------|");
        console.log("| Choose an option:    |");
        console.log("| [1] Factorial        |");
        console.log("| [2] Fibonacci        |");
        console.log("| [3] Two Products     |");
        console.log("| [4] Sum              |");
        console.log("| [5] Exit             |");
        console.log("|---------------------|");
        choice = parseInt(prompt("↳ "), 10);
        switch (choice) {
            case 1:
                const numFactorial = parseInt(prompt("Enter a number to calculate its factorial: "), 10);
                console.log(`${numFactorial}! = ${factorial(numFactorial)}`);
                break;
            case 2:
                const position = parseInt(prompt("Enter the position of the Fibonacci sequence: "), 10);
                console.log(`Fibonacci(${position}) = ${fibonacci(position)}`);
                break;
            case 3:
                const v1 = parseInt(prompt("Enter the first number: "), 10);
                const v2 = parseInt(prompt("Enter the second number: "), 10);
                console.log(`The product of ${v1} and ${v2} is: ${twoProducts(v1, v2)}`);
                break;
            case 4:
                const v3 = parseInt(prompt("Enter the first number: "), 10);
                const v4 = parseInt(prompt("Enter the second number: "), 10);
                console.log(`The sum of ${v3} and ${v4} is: ${sum(v3, v4)}`);
                break;
            case 5:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid option. Please try again.");
                break;
        }
    } while (choice !== 5);
}
main();