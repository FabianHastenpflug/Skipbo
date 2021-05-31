class Spielstand {
	constructor() {
		this.zugP1 = true;
		this.zugP2 = false;
		console.log("Spielstand");
		this.wechseln = function () {
			console.log("Spielstand.wechseln");

			this.zugP1 = !this.zugP1;
			this.zugP2 = !this.zugP2;
			p1.nachziehen();
			p2.nachziehen();
			spielfeld.weglegen();
			print();
		};
	}
}