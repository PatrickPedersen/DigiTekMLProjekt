// Sørger for at socket forbinder til den rigtige adresse og port som vi lytter på.
let socket = io.connect('http://localhost:8080');

// Sætter vores canvas og baggrund.
function setup() {
    let myCanvas = createCanvas(400, 400);
    myCanvas.parent("containerCanvas");

    background(0);
}

// Liste af alle vores farve funktioner. Hver gang en bliver kaldt ændrer den canvas baggrund.
function rod() {
    background(255,0,0)
}
function orange() {
    background(255,165,0)
}
function gul() {
    background(255,215,0)
}
function gron() {
    background(0,255,0)
}
function bla() {
    background(0,0,255)
}
function lilla() {
    background(128,0,128)
}
function sorte() {
    background(0)
}

// Socket lytter efter beskeder.
// Data indeholder et af vores specificerede tal som vi tjekker med hver if statement.
// Hvis et tal matcher et af statements'ene, så udfører vi den respektive farve funktion.
socket.on('message', (data) => {
    console.log(data);
    if (data == 1) {
        console.log('Du ramte rød');
        rod();
    }
    if (data == 2) {
        console.log('Du ramte orange');
        orange();
    }
    if (data == 3) {
        console.log('Du ramte gul');
        gul();
    }
    if (data == 4) {
        console.log('Du ramte grøn');
        gron();
    }
    if (data == 5) {
        console.log('Du ramte blå');
        bla();
    }
    if (data == 6) {
        console.log('Du ramte lilla');
        lilla();
    }
    if (data == 7) {
        console.log('Du ramte sort');
        sorte();
    }
});