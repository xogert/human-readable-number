module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    const numbersStringRepresentations = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
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
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    const stringRepresentationElements = [];

    if (hundreds !== 0) {
        stringRepresentationElements.push(
            numbersStringRepresentations[hundreds],
            "hundred"
        );
    }

    if (tens !== 0 && tens !== 1) {
        stringRepresentationElements.push(
            numbersStringRepresentations[tens * 10]
        );
    }

    if (tens === 1) {
        stringRepresentationElements.push(
            numbersStringRepresentations[tens * 10 + ones]
        );
    }

    if (ones !== 0 && tens !== 1) {
        stringRepresentationElements.push(numbersStringRepresentations[ones]);
    }

    const stringRepresentation = stringRepresentationElements.join(" ");

    return stringRepresentation;
};
