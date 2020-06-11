var fs = require("fs");
var text = fs.readFileSync("pi-million.txt").toString('utf-8');
var text = text.split("");

function isItInPi(n) {
	var m = n.toString().split("");
	
	for(var i = 0; i < text.length; i++){
		if(text[i] == m[0]){
			var counter = 0;
			for(var j = 0; j < m.length; j++){
				if(text[i + j] == m[j]){
					counter++;
				} else {
					break;
				}
				
				if(counter == m.length){
					return[true, i];
				}
			}
		}
	}
	return "maybe";
}

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What is your birthday? ", function(answer1){
	if(isItInPi(answer1)[0] === true){
		console.log("Your birthday is at position " + isItInPi(answer1)[1]);
	} else {
		console.log("Your birthday might be in Pi!");
	}
	rl.close();
});