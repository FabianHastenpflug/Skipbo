class SpielfeldKlasse { //added this comment in web client
    constructor() {
        this.s1 = 0;
        this.s2 = 0;
        this.s3 = 0;
        this.s4 = 0;
    }

    weglegen = function () {
        if (this.s1 == 12) { this.s1 = 0 };
        if (this.s2 == 12) { this.s2 = 0 };
        if (this.s3 == 12) { this.s3 = 0 };
        if (this.s4 == 12) { this.s4 = 0 };
        print();
    }
}