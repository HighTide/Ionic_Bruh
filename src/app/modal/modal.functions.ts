export function sendMessage(message) {
    const url = 'http://192.168.0.22:3000/send?msg=' + message;
    console.log(url);
    const Req = new XMLHttpRequest();
    Req.open('GET', url, true);
    Req.send();
}

//export function getStates(context) {
//    const url = 'http://145.137.55.59:3000/getStates';
//    console.log(url);
//    const Req = new XMLHttpRequest();

//    Req.open('GET', url);
//    const instance = this;
//    Req.onreadystatechange = function () {
//        if (this.readyState === 4 && this.status === 200) {
//            console.log(this.responseText);
//            instance.ParseOutput(context, this.responseText);
//        }
//    };
//    Req.send();
//}

export function getStates() {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            debugger;
            return xmlhttp.responseText;
        }
    }
    const theUrl = 'http://localhost:3000/getStates';
    xmlhttp.open("GET", theUrl);
    xmlhttp.send();
}