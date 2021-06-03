class p {
	constructor(name) {
		this.name = name;
		this.stack = [8, 9, 5, 7, 6, 1, 12, 3];
		this.handkarten = [6, 7, 8, 2, 12];
		console.log("p");

	}
	nachziehen = function () {
		console.log("p.nachziehen");
		for (var i = 0; i < 5; i++) {
			console.log("p.nachziehen.for");
			if (this.handkarten[i] == 0) {
				console.log("p.nachziehen.if");
				this.handkarten[i] = getRandom(1, 12);
				print();
			}
		}
	};

	nexxt = function () {
		console.log("p.pop");
		this.stack.pop();
		print();
	};
}