


function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

let base=prompt("Enter base")
let exponent = prompt("Enter exponent")
console.log(power(base, exponent));