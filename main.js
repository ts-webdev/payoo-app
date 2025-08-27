
// Toggle  Add Money Section
document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block'
    document.getElementById('cashout-section').style.display = 'none'
})

// Toggle  cashout Section
document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cashout-section').style.display = 'block'
    document.getElementById('add-money-section').style.display = 'none'
})


// Add Money
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


