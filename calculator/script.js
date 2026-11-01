let display = document.getElementById("display");

// Display numbers and operators
function appendValue(value) {
    display.value += value;
}

// Clear everything
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        if (display.value.trim() === "") {
            return;
        }

        let result = eval(display.value);

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }

    } catch (error) {
        display.value = "Error";
    }
}