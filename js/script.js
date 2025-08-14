console.log("script jalan");
// pop up nama
function welcomeSpeech(){
    let user_name = prompt("What is your name?");
    if (user_name != " "){
        document.getElementById('user-greeting').textContent = user_name;
    }
}

function sendMessage(){
    let message = document.getElementById('user-message').value;
    if (message != '') {
        alert('Message sent: ' + message);
    } else {
        alert('please enter a message before sending');
    }
}