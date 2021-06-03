class SpielfeldKlasse { //added this comment in web client
	constructor() {
		this.stapels = [0, 0, 0, 0];
		this.weglegen = function () {
			for (var i = 0; i < 4; i++) {
				if (this.stapels[i] == 12) {
					this.stapels[i] = 0;
					print();
				}
			}
		};

	}
}
