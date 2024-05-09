function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function calculateResult() {
    let input = document.getElementById('display').value;
    console.log("Input:", input);
    
    let numbers = input.split(/[+\-*/]/).map(Number);
    console.log("Numbers:", numbers);
    
    let operators = input.split('').filter(char => ['+', '-', '*', '/'].includes(char));
    console.log("Operators:", operators);
    
    if (operators.length === 0 || numbers.length <= 1) {
        document.getElementById('display').value = "Erro";
        return;
    }

    let result = numbers.reduce((acc, curr, index) => {
        if (index === 0) return curr;
        let operator = operators[index - 1];
        switch (operator) {
            case '+':
                return acc + curr;
            case '-':
                return acc - curr;
            case '*':
                return acc * curr;
            case '/':
                return acc / curr;
            default:
                return acc;
        }
    });

    document.getElementById('display').value = result;
}
