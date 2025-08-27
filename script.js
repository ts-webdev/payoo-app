document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    
    // main user name & Pin
    const user = 'ts sumu';
    const userPin = 1234;

    // Get Value from website
    const getInputUserName = document.getElementById('user-name').value;
    const getInputUserPin = document.getElementById('user-pin').value

    // convert user input to Number
    const pin = parseInt(getInputUserPin);
    
    if(getInputUserName === user && userPin === pin){
        console.log('Match')
        window.location.href = '/main.html'
    }
    else{
        alert('Wrong User Name or Password')
    }
    
})