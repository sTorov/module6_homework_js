const exponent = (x, n) => {
    if(typeof x !== "number" || typeof n !== "number" ||
    x <= 0 || n <= 0 || !Number.isInteger(x) || !Number.isInteger(n) ||
    !isFinite(x) || !isFinite(n)){
        return "Необходимо ввести 2 натуральных числа!";
    }

    return x ** n;
};

console.log(exponent(2, 4));
console.log(exponent(3, 3));
console.log(exponent(5, 4));