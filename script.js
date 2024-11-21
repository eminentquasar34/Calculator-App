// JavaScript file for the calculator

// Only run JS file after the DOM content has been loaded, so that the Elements will be
//     successfully retrieved
document.addEventListener("DOMContentLoaded", afterDOMContentLoaded);


function afterDOMContentLoaded() {

    const textBox = document.getElementById("textBox");
    const historyBox = document.getElementById("historyBox");
    let value = 0;
    let temp = 0;
    let operation = "";
    let begin = true;
    let isFirst = true;

    textBox.textContent = 0;

    // Each Key!
    document.getElementById("clear").addEventListener("click", function() {
        textBox.textContent = 0;
        historyBox.textContent = "";
        value = 0;
        temp = 0;
        begin = true;
        isFirst = true;
        operation = "";
    })

    document.getElementById("oneKey").addEventListener("click", function() {
        updateTextBox("1");
        isFirst = false;
    });

    document.getElementById("twoKey").addEventListener("click", function() {
        updateTextBox("2");
        isFirst = false;
    });
    
    document.getElementById("threeKey").addEventListener("click", function() {
        updateTextBox("3");
        isFirst = false;
    });
    
    document.getElementById("fourKey").addEventListener("click", function() {
        updateTextBox("4");
        isFirst = false;
    });
    
    document.getElementById("fiveKey").addEventListener("click", function() {
        updateTextBox("5");
        isFirst = false;
    });
    
    document.getElementById("sixKey").addEventListener("click", function() {
        updateTextBox("6");
        isFirst = false;
    });

    document.getElementById("sevenKey").addEventListener("click", function() {
        updateTextBox("7");
        isFirst = false;
    });

    document.getElementById("eightKey").addEventListener("click", function() {
        updateTextBox("8");
        isFirst = false;
    });

    document.getElementById("nineKey").addEventListener("click", function() {
        updateTextBox("9");
        isFirst = false;
    });

    document.getElementById("zeroKey").addEventListener("click", function() {
        updateTextBox("0");
        isFirst = false;
    });

    document.getElementById("multiplyKey").addEventListener("click", function() {
        if (!isFirst) {
            updateTextBox("*");
        }
    });

    document.getElementById("plusKey").addEventListener("click", function() {
        if (!isFirst) {
            updateTextBox("+");
        }
    });

    document.getElementById("minusKey").addEventListener("click", function() {
        updateTextBox("-");
    });

    document.getElementById("divideKey").addEventListener("click", function() {
        if (!isFirst) {
            updateTextBox("÷");
        }
    });

    document.getElementById("equalsKey").addEventListener("click", function() {
        equalsKeyPressed();
    })


    function operationPressed(initNegative, operationPress) {
        begin = false;
        if (operation == "") {
            operation = operationPress;
            if (initNegative) {
                value *= -1;
            }
        } else {
            if (operation == "÷") {
                value = value / temp;
                temp = 0;
            } else if (operation == "*") {
                value = value * temp;
                temp = 0;
            } else if (operation == "+") {
                value = value + temp;
                temp = 0;
            } else if (operation == "-") {
                value = value - temp;
                temp = 0;
            }
            operation = operationPress;
        }
    }


    function equalsKeyPressed() {
        let equation = textBox.textContent;
        let nums = "0123456789";
        let initNegative = false;
        let i = 0;
        if (equation.charAt(0) == "-") {
            i++;
            initNegative = true;
        }

        for (; i < equation.length; i++) {
            if (nums.includes(equation.charAt(i))) {
                if (begin) {
                    value = value * 10 + parseInt(equation.charAt(i));
                } else {
                    temp = temp * 10 + parseInt(equation.charAt(i));
                }
            } else {
                operationPressed(initNegative, equation.charAt(i));
                initNegative = false;
            }
        }
        console.log(value);
        console.log(temp);
        if (operation == "÷") {
            value = value / temp;
            temp = 0;
        } else if (operation == "*") {
            value = value * temp;
            temp = 0;
        } else if (operation == "+") {
            value = value + temp;
            temp = 0;
        } else if (operation == "-") {
            value = value - temp;
            temp = 0;
        }
        historyBox.textContent = equation;
        textBox.textContent = value;
        value = 0;
        begin = true;
        operation = "";
    }

    function updateTextBox(input) {
        
        let history = textBox.textContent;
        if (!isFirst) {
            textBox.textContent = history + input;
        } else {
            textBox.textContent = input;
            isFirst = false;
        }
        
    };

    // Operations
    function add(num1, num2) {
        return num1 + num2;
    };
    
    function subtract(num1, num2) {
        return num1 - num2;
    };

    function subtract(num1) {
        return -num1;
    }
    
    function multiply(num1, num2) {
        return num1 * num2;
    };
    
    function divide(num1, num2) {
        return num1 / num2;
    };
}