
function btn(value) {
    const display = document.getElementById("display");
    display.value += value;
}

function calculatorNumber() {
    const display = document.getElementById("display");
    const expression = display.value;
    try {
        const result = eval(expression);

        display.value = result;

        addListItem(expression, result);

    } catch (error) {
        display.value = "Error";
    }
}

function addListItem(expression, result) {
    const newEl = document.createElement("div");
    newEl.textContent = `${expression} = ${result}`;
    document.getElementById("history").prepend(newEl);
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function clearhistory() {
    document.getElementById("history").innerHTML = "";
}