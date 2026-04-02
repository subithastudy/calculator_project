const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calc-btn');

// Using forEach for button
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const val = button.getAttribute('data-val');

        if (val === 'AC') {
            // Clear the display 
            display.value = '';
        } else if (val === 'CLR') {
            // Remove last character
            display.value = display.value.slice(0, -1);
        } else if (val === '=') {
            // Calculate and display result
            if (display.value) {
                const result = new Function('return ' + display.value)();
                display.value = result;
            }
        } else if (val === 'sq') {
            // Calculate sqaure value of the number
            let n = parseFloat(display.value) || 0;
            display.value = n * n;
        } else if (val === 'cu') {
            // Calculate cube value of the number
            let n = parseFloat(display.value) || 0;
            display.value = n * n * n;
        } else {
            // Append numbers or operators
            display.value += val;
        }

    });
});