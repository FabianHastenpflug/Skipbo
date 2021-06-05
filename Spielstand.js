class Spielstand {
	constructor() {
		this.zugP1 = false;
		this.wechseln();
	}
	wechseln = function () {
		console.log(aktionAusgefuehrt);
		if (aktionAusgefuehrt) {
			console.log("xxx");
			speichern = false;
			this.zugP1 = !this.zugP1;
			p1.nachziehen();
			p2.nachziehen();
			print();
			this.zugP1 ? console.log("Spieler: " + p1.name) : console.log("Spieler: " + p2.name);
			if (this.zugP1) {
				for (let i = 0; i < 6; i++) {
					document.getElementsByClassName('zwei')[i].disabled = true;
					document.getElementsByClassName('eins')[i].disabled = false;
				}
			}
			else {
				for (let i = 0; i < 6; i++) {
					document.getElementsByClassName('eins')[i].disabled = true;
					document.getElementsByClassName('zwei')[i].disabled = false;
				}
			}
			aktionAusgefuehrt = false;
		}
	};
}