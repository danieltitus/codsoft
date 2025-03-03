function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append the value to the display
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = ''; // Clear the display
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = 'Error'; // Show error if evaluation fails
    }
}

