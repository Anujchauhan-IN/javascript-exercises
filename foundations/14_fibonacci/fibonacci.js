const fibonacci = function (number) {
    let fib = [0, 1];
    if (number < 0) {
        return "OOPS";
    }
    if (typeof number === "string") {
        number = Number(number);
    }

    for (let i = 2; i <= number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[number];
};

// Do not edit below this line
module.exports = fibonacci;
