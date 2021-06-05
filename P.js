class p {
    constructor(name) {
        this.name = name;
        this.stack = [8, 9, 5, 7, 6, 1, 12, 3];
        this.k1 = getRandom(1, 12);
        this.k2 = getRandom(1, 12);
        this.k3 = getRandom(1, 12);
        this.k4 = getRandom(1, 12);
        this.k5 = getRandom(1, 12);

    }
    nachziehen = function () {
        if (this.k1 == 0) { this.k1 = getRandom(1, 12) };
        if (this.k2 == 0) { this.k2 = getRandom(1, 12) };
        if (this.k3 == 0) { this.k3 = getRandom(1, 12) };
        if (this.k4 == 0) { this.k4 = getRandom(1, 12) };
        if (this.k5 == 0) { this.k5 = getRandom(1, 12) };
        print();
    }

    nexxt = function () {
        this.stack.pop();
        print();
    }
}