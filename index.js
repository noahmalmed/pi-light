var firebase = require("firebase");
//var gpio = require('rpi-gpio');

var config = {
  
};
 
//gpio.setup(18, gpio.DIR_OUT, write);
 
function writeVoltage(voltageHigh) {
    // gpio.write(18, voltageHigh, function(err) {
    //     if (err) throw err;
    //     console.log('Written to pin');
    // });
}

firebase.initializeApp(config);

firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
});

var database = firebase.database();

console.log("Setting up");
// Listen for the value to change 
var lightRef = firebase.database().ref('light');
lightRef.on('value', function(snapshot) {
	console.log(snapshot.val());
	if (snapshot.val() == 0) {
		writeVoltage(true);
	} else {
		writeVoltage(false);
	}
});