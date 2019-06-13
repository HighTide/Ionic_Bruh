export function sendMessage(message) {
    const url = 'http://192.168.0.22:3000/send?msg=' + message;
    console.log(url)
    const Req = new XMLHttpRequest();
    Req.open('GET', url, true);
    Req.send();
}