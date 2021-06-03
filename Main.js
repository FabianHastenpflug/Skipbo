function init(){
	p1 = new p("p1");
	p2 = new p("p2");
	spielfeld = new SpielfeldKlasse();
	spielstand = new Spielstand();
	print();
}

function ablegen(diff) {
	var cond1 = false;
	var cond2 = false;
	var vomRotenStapel = false;
	var handkartenPos = -1;
	var stapelsPos = -1;
	var idStringInput = "";
	var idStringP = "";

	var px;
	if (diff == 1) {
		px = p1;
		idStringInput = "inputP1";
		idStringP = "p1";
	}
	else {
		px = p2;
		idStringInput = "inputP2";
		idStringP = "p2";
	}

	var input = parseInt(document.getElementById(idStringInput).value);

	if (input == px.stack[px.stack.length - 1]){
		input = px.stack[px.stack.length - 1]
		cond1 = true;
		vomRotenStapel = true;
	}
	else{
		for (var i = 0; i < 5; i++) {
			if (input == px.handkarten[i]) {
				handkartenPos = i;
				cond1 = true;
			}
		}
	}
	for (var i = 0; i < 4; i++) {
		if (input == spielfeld.stapels[i] + 1) {
			stapelsPos = i;
			cond2 = true;
			if (input == 12) {
				spielfeld.weglegen();
			}
		}
	}
	if (cond1 && cond2) {
		spielfeld.stapels[stapelsPos] = input;
		if (vomRotenStapel){
			px.stack.pop();
		}
		else{
			px.handkarten[handkartenPos] = 0;
		}
	}

	print();
}

function print() {
	document.getElementById("p1").innerHTML = p1.handkarten;
	document.getElementById("stackP1").innerHTML = p1.stack[p1.stack.length - 1];
	document.getElementById("p2").innerHTML = p2.handkarten;
	document.getElementById("stackP2").innerHTML = p2.stack[p2.stack.length - 1];
	document.getElementById("desk").innerHTML = spielfeld.stapels;
}

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}