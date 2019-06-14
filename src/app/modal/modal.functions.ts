var states = { "Lamp": 0, "Fridge": 0, "Window": 0, "Fan": 0, "TV": { "power": 0, "channel": 0, Volume: 0 } };

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

export async function getStates() {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            states = JSON.parse(xmlhttp.responseText);
            
            if (states.Fan == 0) {
                document.querySelector("#FanOn").checked = false; 
                document.querySelector("#FanOff").checked = true;
            }
            else {
                document.querySelector("#FanOff").checked = false;
                document.querySelector("#FanOn").checked = true;
            }
            
            return states;
        }
    }
    const theUrl = 'http://localhost:3000/getStates';
    xmlhttp.open("GET", theUrl);
    xmlhttp.send();
}