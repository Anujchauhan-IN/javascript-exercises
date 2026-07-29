const removeFromArray = function (array, ...number) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== number) {
            arr.push(array[i]);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
