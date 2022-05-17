function askName() {
    let username = prompt("İsminiz Nedir ?.");
    if (username != null) {
        document.getElementById("myName").innerHTML = username;
    }
}

function showTime() {

    const interval = setInterval(() => {
        const now = new Date();
        var date =now.toUTCString();
        document.getElementById('myClock').innerHTML = date;
    }, 1000);

}