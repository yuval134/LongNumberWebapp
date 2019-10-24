// get number as string, return as long number expression
function string_to_long_number(str) {
    return str.split('').map(Number);
}

// gets 2 long numbers and adds them
function sum(num1, num2) {
    let idx1 = num1.length - 1; // index to the last member in the array
    let idx2 = num2.length - 1; // "    "
    let reminder = 0;
    let result = [];
    for (idx1, idx2; idx1 >= 0 || idx2 >= 0; idx1--, idx2--) { // loop until pass over all the digits
        const calc = (idx1 >= 0 ? num1[idx1] : 0) + (idx2 >= 0 ? num2[idx2] : 0) + reminder;
        reminder = ~~(calc / 10);
        result.push(calc % 10)
    }
    if (reminder > 0) result.push(reminder);
    return result.reverse();
}

// gets 2 long numbers and multiply them
function multiply(num1, num2) {
    let result = [0];
    for (let idx2 = num2.length - 1; idx2 >= 0; idx2--) { // loop num2 array
        let reminder = 0;
        let inter_result = [];
        for (let i = idx2; i < num2.length - 1; i++) inter_result.push(0);// padding zeros
        for (let idx1 = num1.length - 1; idx1 >= 0; idx1--) { // loop num1 array
            const calc = num2[idx2] * num1[idx1] + reminder;
            reminder = ~~(calc / 10);
            inter_result.push(calc % 10)
        }
        if (reminder > 0) inter_result.push(reminder);
        result = sum(result, inter_result.reverse());
    }
    return result;

}

// exports:
exports.string_to_long_number = string_to_long_number;
exports.sum = sum;
exports.multiple = multiply;