import { Turtle } from "./turtle.js";

start();
const turtle = new Turtle();
turtle.goToPosition(5000, 4000);
drawSquare(1000);
//drawMagic(1000, 30, 1);
console.log(turtle.instructions.join("\n"));
end();


function drawMagic(length, scaleLength, turnAngle) {
    for(let count = 0; count < 500; count++) {
        drawSquare(length  + (count * scaleLength));
        turtle.turn(turnAngle);
        turtle.move(20);
    }
}
function drawSquare(length) {
    turtle.setPenUp(false);
    for(let i = 0; i < 4 ; i++) {
        turtle.move(length);
        turtle.turn(90);
    }
    turtle.setPenUp(true);
}

function start() {
    console.log("IN;SP1;");
}

function end() {
    console.log("PU;SP0;");
}
// console.log("PA5000,4000;");
// console.log("PD;PA6000,4000;");
// console.log("PA6000,3000;");
// console.log("PA5000,3000;");
// console.log("PA5000,4000;")
