
function toCalc(value) {
    document.getElementById('calc').value += value;
}


function clearCalc() {
    document.getElementById('calc').value = '';
}


function calculate() {
    const input = document.getElementById('calc').value;
    try {
        
        const result = new Function('return ' + input)();
        document.getElementById('calc').value = result;
    } catch (e) {
        document.getElementById('calc').value = 'Error';
    }
}
