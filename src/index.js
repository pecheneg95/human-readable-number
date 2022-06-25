module.exports = function toReadable(n) {
    let res = "";

    let numFromZeroToNine = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };
    let numDecimal = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let numFromTenToNineteen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    if (n / 100 >= 1) {
        res = res + `${numFromZeroToNine[Math.floor(n / 100)]} hundred `;
    }

    if (n % 100 > 19) {
        res = res + `${numDecimal[Math.trunc((n % 100) / 10) * 10]} `;

        if (n % 10 !== 0) {
            res = res + `${numFromZeroToNine[n % 10]}`;
        }
    } else {
        if (n % 100 > 9) {
            res = res + `${numFromTenToNineteen[n % 100]}`;
        } else if (n % 100 > 0) {
            res = res + `${numFromZeroToNine[n % 100]}`;
        }
    }
    if (n === 0) {
        return numFromZeroToNine[n];
    }

    return res.trim();
};
