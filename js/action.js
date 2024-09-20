document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney = getInputFieldValueById('add-money-input');
    const currentBalance = getInnerTextById('current-balance');
    const pin = getInputFieldValueById('input-pin')
    const newBalance = currentBalance + addMoney;
    if(isNaN(addMoney)){
        alert('not a number');
        return;
    }
    if(pin === 1111){
        document.getElementById('current-balance').innerText = newBalance;
        const transaction = document.createElement('p');
        transaction.innerText = `Credited: ${addMoney} Tk. New Balance: ${newBalance}` ;
        document.getElementById('transaction-container').appendChild(transaction);
    }
    else{
        console.log('failed to add money');
    }
});
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut = getInputFieldValueById('cash-out-input');
    const currentBalance = getInnerTextById('current-balance');
    const pin = getInputFieldValueById('input-pin')
    if(cashOut>currentBalance){
        alert('You have not enough money to withdraw');
        return;
    }
    const newBalance = currentBalance - cashOut;
    if(isNaN(cashOut)){
        alert('not a number');
        return;
    }
    if(pin === 1111){
        document.getElementById('current-balance').innerText = newBalance;
        const transaction = document.createElement('p');
        transaction.innerText = `Debited: ${cashOut} Tk. New Balance: ${newBalance}`;
        document.getElementById('transaction-container').appendChild(transaction);
    }
    else{
        console.log('failed to add money');
    }
});
document.getElementById('add-money-button-1').addEventListener('click',function(){
    showSectionById('add-money-page');
});
document.getElementById('cash-out-button-1').addEventListener('click',function(){
    showSectionById('cash-out-page');
});
document.getElementById('transactions-button-1').addEventListener('click',function(){
    showSectionById('transactions-sections');
});