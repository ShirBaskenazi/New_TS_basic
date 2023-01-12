"use strict";
function getAverage(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum / arr.length;
}
alert(getAverage([23, 43, 53]));
function getAmountOfPositive(arr) {
    let countOfP = 0;
    arr.forEach((value) => {
        if (value > 0) {
            countOfP++;
        }
    });
    return countOfP;
}
alert(getAmountOfPositive([23, 43, 53, -78, 64, -87]));
function sortList(arr) {
    return arr.sort();
}
