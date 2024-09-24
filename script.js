// script.js
function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    const result = num1 + num2;

    document.getElementById("result").innerText = `Result: ${result}`;

    if (result === 2) {
        document.getElementById("result").innerText += " I LOVE YOU❤️❤️";
    }
}
