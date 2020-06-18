# Ionic_Bruh
## Installing
npm install

npm install ionic -g

## Run
### Browser
ionic serve

### Android
#### APK
ionic cordova prepare android 
#### Live Updating
ionic cordova run android -l
#### Simulator
Make sure the Android Simulator is open and running
## Unit Testing
npm test

If you want to use serve, you can install and use it with npm like so:

```bash
npm install
npm run serve
```

The page will be available at [localhost:5000/index.html](http://localhost:5000/index.html).


## Viewing on a mobile device.

If you want to test this on a mobile device, you will need to make a tunnel to your local machine. [I recommend you use ngrok for this](https://www.twilio.com/blog/2015/09/6-awesome-reasons-to-use-ngrok-when-testing-webhooks.html). You can [download and install ngrok from ngrok.com](https://ngrok.com/). Once you have it installed, run

```bash
ngrok http 5000
```

This will open a tunnel to the locally hosted project. You will get two randomly generated URLs, enter the HTTPS version into the browser in your mobile device.
