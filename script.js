function getNumbers() {
    let input = document.getElementById("numbersInput").value;

    return input
        .split(",")
        .map(num => Number(num.trim()))
        .filter(num => !isNaN(num));
}
function calculateMean() {
    let numbers = getNumbers();

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let mean = sum / numbers.length;

    showResult(mean);
}
function calculateMedian() {
    let numbers = getNumbers();
    numbers.sort((a, b) => a - b);

    let mid = Math.floor(numbers.length / 2);
    let median;

    if (numbers.length % 2 === 0) {
        median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        median = numbers[mid];
    }

    showResult(median);
}
function calculateRange() {
    let numbers = getNumbers();
    numbers.sort((a, b) => a - b);

    let range = numbers[numbers.length - 1] - numbers[0];

    showResult(range);
}
function calculateVariance() {
    let numbers = getNumbers();

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let mean = sum / numbers.length;

    let squaredDiff = 0;
    for (let i = 0; i < numbers.length; i++) {
        let diff = numbers[i] - mean;
        squaredDiff += diff * diff;
    }

    let variance = squaredDiff / numbers.length;

    showResult(variance);
}
function calculate(type) {
    let numbers = getNumbers();
    let result;

    if (type === 'add') {
        result = 0;
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
    }

    else if (type === 'subtract') {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i];
        }
    }

    else if (type === 'multiply') {
        result = 1;
        for (let i = 0; i < numbers.length; i++) {
            result *= numbers[i];
        }
    }

    else if (type === 'divide') {
        result = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] === 0) {
                showResult("Cannot divide by 0 😭");
                return;
            }
            result /= numbers[i];
        }
    }

    showResult(result);
}
function showResult(result) {
    document.getElementById("result").innerText = "Result: " + result;
}
function calculateMode() {
    let numbers = getNumbers();
    let freq = {};
    let maxFreq = 0;
    let mode = [];

    for (let num of numbers) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxFreq) maxFreq = freq[num];
    }

    for (let num in freq) {
        if (freq[num] === maxFreq) mode.push(Number(num));
    }

    showResult("Mode: " + mode.join(", "));
}

function calculateStdDev() {
    let numbers = getNumbers();
    let sum = numbers.reduce((a, b) => a + b, 0);
    let mean = sum / numbers.length;

    let squaredDiff = numbers.reduce((acc, n) => acc + Math.pow(n - mean, 2), 0);
    let stdDev = Math.sqrt(squaredDiff / numbers.length);

    showResult(stdDev);
}