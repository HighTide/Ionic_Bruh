let states = { "Lamp": 0, "Fridge": 0, "Window": 0, "Fan": 0, "TV": { "power": 0, "channel": 0, "Volume": 0 } };
let changed = "";
function setButton(current) {
    if (current != "Fridge" && current != "Bed" && current != "Television") {
        if (states[current] == 0) {
            (document.getElementById(current + "On") as HTMLInputElement).checked = false;
            (document.getElementById(current + "Off") as HTMLInputElement).checked = true;
        }
        else {
            (document.getElementById(current + "On") as HTMLInputElement).checked = true;
            (document.getElementById(current + "Off") as HTMLInputElement).checked = false;
        }
    }
    else if (states[current] != 0 && current != "Television") {
        (document.getElementById(current) as HTMLInputElement).disabled = true;
    }
    else if (states[current] != 0) {
        (document.getElementById(current) as HTMLInputElement).checked = true;
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
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            states = JSON.parse(xmlhttp.responseText);
            setButton(current);
            return states;
            } 
        }
    const theUrl = 'http://localhost:3000/getStates';
    xmlhttp.open('GET', theUrl);
    xmlhttp.send();
}


