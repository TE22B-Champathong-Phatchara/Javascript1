
function calculate(operator) {
    var tal1 = parseInt(document.getElementById('tal1').value) || 0;
    var tal2 = parseInt(document.getElementById('tal2').value) || 0;

    var result;
    switch (operator) {
        case '+':
            result = tal1 + tal2;
            break;
        case '-':
            result = tal1 - tal2;
            break;
        case '*':
            result = tal1 * tal2;
            break;
        case '/':
            result = tal1 / tal2;
            break;
        default:
            result = 0;
    }

    document.getElementById('svar').value = result;
}