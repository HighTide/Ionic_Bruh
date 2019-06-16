var states = { "Lamp": 0, "Fridge": 0, "Window": 0, "Fan": 0, "TV": { "power": 0, "channel": 0, "Volume": 0 } };
var changed = "";
function setButton(current) {
    if (current != "Fridge" && current != "Bed") {
        if (states[current] == 0) {
            (document.querySelector("#" + current + "On") as HTMLInputElement).checked = false;
            (document.querySelector("#" + current + "Off") as HTMLInputElement).checked = true;
        }
        else {
            (document.querySelector("#" + current + "Off") as HTMLInputElement).checked = false;
            (document.querySelector("#" + current + "On") as HTMLInputElement).checked = true;
        }
    }
    else if (states[current] != 0) {
        (document.querySelector("#" + current) as HTMLInputElement).disabled = true;
    }
}

export function sendMessage(message) {
    changed = message.replace("Off" || "On", "");
    const url = 'http://localhost:3000/send?msg=' + message;
    console.log(url);
    const Req = new XMLHttpRequest();
    Req.open('GET', url, true);
    Req.send();
}

export async function getStates(current) {
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            states = JSON.parse(xmlhttp.responseText);
            setButton(current);
            
        }
            return states;
        }
    
    const theUrl = 'http://localhost:3000/getStates';
    xmlhttp.open("GET", theUrl);
    xmlhttp.send();
}

