
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let n = prompt("Enter a number")
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
