class SpielfeldKlasse { //added this comment in web client
	constructor() {
		this.stapel = [5, 8, 2, 11];
		this.weglegen = function () {
			for (var i = 0; i < 4; i++) {
				if (this.stapel[i] == 12) {
					this.stapel[i] = 0;
					print();
				}
			}
		};

	}
}
