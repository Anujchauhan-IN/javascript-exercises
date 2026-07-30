const palindromes = function (array) {
    let cleanArray = array.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedArray = cleanArray.split("").reverse().join("");
    if (reversedArray === cleanArray) {
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = palindromes;
