// Function to accept two numbers from user
const getValues = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    return { num1, num2 };
}

// Function to display result
const showResult = (value) => {
    document.getElementById("result").innerText = "Result: " + value;
};

// Function to add two numbers
document.getElementById("addBtn").addEventListener("click", () => {
    const { num1, num2 } = getValues();
    showResult(num1 + num2);
});

// Function to subtract two numbers
document.getElementById("subBtn").addEventListener("click", () => {
    const { num1, num2 } = getValues();
    showResult(num1 - num2);
});

// Function to multiply two numbers
document.getElementById("mulBtn").addEventListener("click", () => {
    const { num1, num2 } = getValues();
    showResult(num1 * num2);
});

// Function to divide two numbers
document.getElementById("divBtn").addEventListener("click", () => {
    const { num1, num2 } = getValues();
    if (num2 === 0) {
        showResult("Cannot divide by 0");
    } else {
        showResult(num1 / num2);
    } 
});

// Function to calculate square of number
document.getElementById("squareBtn").addEventListener("click", () => {
    const { num1 } = getValues();
    showResult(num1 * num1);
});

// Function to calculate cube of number
document.getElementById("cubeBtn").addEventListener("click", () => {
    const { num1 } = getValues();
    showResult(num1 * num1 * num1);
});