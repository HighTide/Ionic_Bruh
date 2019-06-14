var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var states = {"Lamp":0,"Fridge":0,"Window":0,"Fan":0,"TV":{"power":0,"channel":0,Volume:0}};

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/send', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    io.emit('chat message', req.query.msg);
    console.log(req.query.msg);
    switch(req.query.msg) {
                case 'FanOn':
                    states.Fan = 1;
                    break;
                case 'FanOff':
                    states.Fan = 0;
                    break;
                case 'LampOn':
                    states.Lamp = 1;
                    break;
                case 'LampOff':
                    states.Lamp = 1;
                    break;
                case 'Bed':
                    states.Bed = 1;
                    break;
                case 'WindowOn':
                    states.Window = 1;
                    break;
                case 'WindowOff':
                    states.Window = 0;
                    break;
                case 'Fridge':
                    states.Fridge = 1;
                    break;
                    }
    console.log(JSON.stringify(states));
    res.sendStatus(200);
  //res.sendFile(__dirname + '/index.html');
});

app.get('/getStates', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    io.emit('StateChange',states);
    res.JSON = JSON.stringify(states);
    res.send(JSON.stringify(states));
  //res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

io.on('connection', function(socket){
  socket.on('StateChange', function(update){
    io.emit('StateChange', states);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
