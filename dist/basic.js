"use strict";
let getAverage = ((arr) => {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum / arr.length;
});
console.log(getAverage([23, 43, 53]));
let getAmountOfPositive = (arr) => {
    let countOfP = 0;
    arr.forEach((value) => {
        if (value > 0) {
            countOfP++;
        }
    });
    return countOfP;
};
console.log(getAmountOfPositive([23, 43, 53, -78, 64, -87]));
let sortList = (arr) => {
    return arr.sort();
};
console.log(sortList([23, 43, 53, -78, 64, -87]));
