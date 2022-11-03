function myFunction() {
    let userInput = document.querySelector('#userInput');
    let message = document.querySelector('#message');

    message.innerHTML = 'welcome to my page ' + userInput.value;
}
