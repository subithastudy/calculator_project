const input = document.getElementById('input');

// Returns list of all Button elements
const buttons = document.querySelectorAll('.calc-btn');

// Using forEach for each button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const val = button.getAttribute('data-val');

        if (val === 'AC') {
            // Clear the input 
            input.value = '';
        } else if (val === 'CLR') {
            // Remove last input character
            input.value = input.value.slice(0, -1);
        } else if (val === '=') {
            // eval function used to calculate and display result
            if (input.value) {
                const result = eval(input.value);
                // Division by zero scenario
                if (result === Infinity || result === -Infinity) {
                    input.value = "Cannot divide by 0";
                } else {
                    // Storing value to get dispalyed
                    input.value = result;
                }
            }
        } else if (val === 'sq') {
            // Calculate sqaure value of the number
            let n = parseFloat(input.value) || 0;
            input.value = n * n;
        } else if (val === 'cu') {
            // Calculate cube value of the number
            let n = parseFloat(input.value) || 0;
            input.value = n * n * n;
        } else {
            // Append numbers or operators
            input.value += val;
        }

    });
});