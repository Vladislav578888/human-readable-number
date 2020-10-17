module.exports = function toReadable (number) {
    const zero_to_twenty = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
    ];

    const twenty_to_onehun = [
        null,
        null,
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number <= 20)
    return zero_to_twenty[number];
    else if (number < 100) {
        const one = number % 10;
        const ten = Math.floor(number / 10);
        return twenty_to_onehun[ten] + (one ? " " + zero_to_twenty[one] : "");
    } else {
        const hundred = Math.floor(number / 100);
        const ten = number % 100;
        return zero_to_twenty[hundred] + " hundred" + (ten ? " " + toReadable(ten) : "");
    }
}