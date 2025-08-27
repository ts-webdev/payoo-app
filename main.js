
// Toggle  Add Money Section
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block'
    document.getElementById('cashout-section').style.display = 'none'

    // active button 
    document.getElementById('add-money').classList.add('active-btn')
    document.getElementById('cash-out').classList.remove('active-btn')
})

// Toggle  cashout Section
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'block'
    document.getElementById('add-money-section').style.display = 'none'

    // active button 
    document.getElementById('cash-out').classList.add('active-btn')
    document.getElementById('add-money').classList.remove('active-btn')
})


// Add Money Function
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault()

    // get information
    const addBankName = document.getElementById('add-bank').value;
    const addAccountNumber = document.getElementById('add-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const addPin = document.getElementById('add-pin').value;

    // Get current Amount
    const currentAmount = parseInt(document.getElementById('current-amount').innerText);

    // Add New Amount
    if  (!addPin == false) {
        if (addPin === "1234") {
            document.getElementById('current-amount').innerText = currentAmount + addAmount;

            document.getElementById('add-pin').value = ''
            document.getElementById('add-amount').value = ''
        }
        else {
            alert('Wrong Pin')
        }
    }
    else{
        alert('Enter Your Password')
    }
})


// Withdraw Money Function
document.getElementById('withdraw-btn').addEventListener('click', function (e) {
    e.preventDefault()

    // get information
    const cashoutAccountNumber = document.getElementById('cashout-number').value;
    const cashoutAmount = parseInt(document.getElementById('cashout-amount').value);
    const cashoutPin = document.getElementById('cashout-pin').value;

    // Get current Amount
    const currentAmount = parseInt(document.getElementById('current-amount').innerText);

    // Add New Amount after Withdraw money
    if  (!cashoutPin == false) {
        if (cashoutPin === "1234") {
            document.getElementById('current-amount').innerText = currentAmount - cashoutAmount;

            document.getElementById('cashout-pin').value = ''
            document.getElementById('cashout-amount').value = ''
        }
        else {
            alert('Wrong Pin')
        }
    }
    else{
        alert('Enter Your Password')
    }
})


