function init() {
    p1 = new p("Ina");
    p2 = new p("Fabi");
    spielfeld = new SpielfeldKlasse();
    spielstand = new Spielstand();
    print();
}

function ablegen(diff) {
    var vomRotenStapel = false;
    var px;
    var match = true;
    var vonSpeicher = false;
    var input = parseInt(document.getElementById(diff).innerHTML);

    diff.includes("p1") ? px = p1 : px = p2;
    if (diff.includes("r")) { vomRotenStapel = true; }
    if (diff.includes("speicher")) { vonSpeicher = true; }

    if (speichern) {
        if (!vonSpeicher) {
            von = input;
            idVon = diff;
            handkarteAusgewählt = true;
        }
        if (vonSpeicher && handkarteAusgewählt) {
            console.log("vonSpeicher && handkarteAusgewählt");
            console.log(von);
            if (diff.includes("_1")) { px.sp1.push(von); }
            if (diff.includes("_2")) { px.sp2.push(von); }
            if (diff.includes("_3")) { px.sp3.push(von); }
            if (diff.includes("_4")) { px.sp4.push(von); }

            if (idVon.includes("_1")) { px.k1 = 0; }
            if (idVon.includes("_2")) { px.k2 = 0; }
            if (idVon.includes("_3")) { px.k3 = 0; }
            if (idVon.includes("_4")) { px.k4 = 0; }
            if (idVon.includes("_5")) { px.k5 = 0; }

            idVon = "";
            von = "";
            speichern = false;
            handkarteAusgewählt = false;
            spielstand.wechseln()
            print();
        }
    }
    else {


        if (spielfeld.s1 == input - 1) { spielfeld.s1++; }
        else if (spielfeld.s2 == input - 1) { spielfeld.s2++; }
        else if (spielfeld.s3 == input - 1) { spielfeld.s3++; }
        else if (spielfeld.s4 == input - 1) { spielfeld.s4++; }
        else {
            match = false;


        }

        if (match) {
            if (vonSpeicher) {
                if (diff.includes("_1") && px.sp1.length > 0) { px.sp1.pop(); }
                if (diff.includes("_2") && px.sp2.length > 0) { px.sp2.pop(); }
                if (diff.includes("_3") && px.sp3.length > 0) { px.sp3.pop(); }
                if (diff.includes("_4") && px.sp4.length > 0) { px.sp4.pop(); }
            }
            else {
                if (diff.includes("_1")) { px.k1 = 0; }
                if (diff.includes("_2")) { px.k2 = 0; }
                if (diff.includes("_3")) { px.k3 = 0; }
                if (diff.includes("_4")) { px.k4 = 0; }
                if (diff.includes("_5")) { px.k5 = 0; }

                if (vomRotenStapel) { px.nexxt(); }
            }
        }

        spielfeld.weglegen();
        print();
    }
    aktionAusgefuehrt = true;
}

function print() {
    document.getElementById("p1_1").innerHTML = p1.k1;
    document.getElementById("p1_2").innerHTML = p1.k2;
    document.getElementById("p1_3").innerHTML = p1.k3;
    document.getElementById("p1_4").innerHTML = p1.k4;
    document.getElementById("p1_5").innerHTML = p1.k5;
    document.getElementById("p1_r").innerHTML = p1.stack[p1.stack.length - 1];

    document.getElementById("p1_speicher_1").innerHTML = p1.sp1[p1.sp1.length - 1];
    document.getElementById("p1_speicher_2").innerHTML = p1.sp2[p1.sp2.length - 1];
    document.getElementById("p1_speicher_3").innerHTML = p1.sp3[p1.sp3.length - 1];
    document.getElementById("p1_speicher_4").innerHTML = p1.sp4[p1.sp4.length - 1];
    document.getElementById("p1_speicher_1").title = p1.sp1.slice(1);
    document.getElementById("p1_speicher_2").title = p1.sp2.slice(1);
    document.getElementById("p1_speicher_3").title = p1.sp3.slice(1);
    document.getElementById("p1_speicher_4").title = p1.sp4.slice(1);

    document.getElementById("stpl_1").innerHTML = spielfeld.s1;
    document.getElementById("stpl_2").innerHTML = spielfeld.s2;
    document.getElementById("stpl_3").innerHTML = spielfeld.s3;
    document.getElementById("stpl_4").innerHTML = spielfeld.s4;

    document.getElementById("p2_speicher_1").innerHTML = p2.sp1[p2.sp1.length - 1];
    document.getElementById("p2_speicher_2").innerHTML = p2.sp2[p2.sp2.length - 1];
    document.getElementById("p2_speicher_3").innerHTML = p2.sp3[p2.sp3.length - 1];
    document.getElementById("p2_speicher_4").innerHTML = p2.sp4[p2.sp4.length - 1];
    document.getElementById("p2_speicher_1").title = p2.sp1.slice(1);
    document.getElementById("p2_speicher_2").title = p2.sp2.slice(1);
    document.getElementById("p2_speicher_3").title = p2.sp3.slice(1);
    document.getElementById("p2_speicher_4").title = p2.sp4.slice(1);

    document.getElementById("p2_1").innerHTML = p2.k1;
    document.getElementById("p2_2").innerHTML = p2.k2;
    document.getElementById("p2_3").innerHTML = p2.k3;
    document.getElementById("p2_4").innerHTML = p2.k4;
    document.getElementById("p2_5").innerHTML = p2.k5;
    document.getElementById("p2_r").innerHTML = p2.stack[p2.stack.length - 1];;
}
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}