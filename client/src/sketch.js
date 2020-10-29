let socket = io.connect('http://localhost:8080');

function setup() {
    let myCanvas = createCanvas(400, 400);
    myCanvas.parent("containerCanvas");

    background(0);
}

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

socket.on('message', (data) => {
    console.log(data);
    if (data == 1) {
        console.log('Du ramte rød');
        rod();
    }
    if (data == 2) {
        console.log('Du ramte rød');
        orange();
    }
    if (data == 3) {
        console.log('Du ramte rød');
        gul();
    }
    if (data == 4) {
        console.log('Du ramte rød');
        gron();
    }
    if (data == 5) {
        console.log('Du ramte rød');
        bla();
    }
    if (data == 6) {
        console.log('Du ramte rød');
        lilla();
    }
    if (data == 7) {
        console.log('Du ramte rød');
        sorte();
    }
});