class SpielfeldKlasse {
	constructor() {
		this.stapel = [5, 8, 4, 11];
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