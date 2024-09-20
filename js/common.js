function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getInnerTextById(id){
    const text = document.getElementById(id).innerText;
    const textToNumber = parseFloat(text);
    return textToNumber;
}

function showSectionById(id){
    document.getElementById('transactions-sections').classList.add('hidden');
    document.getElementById('cash-out-page').classList.add('hidden');
    document.getElementById('add-money-page').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}