export class Turtle {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.angle = 90;
        this.instructions = [];
        this.penUp = true;
    }
    turn(angleInDegrees) {
        this.angle += Turtle.getRadian(angleInDegrees) % (2 * Math.PI);
    }
    move(length) {
        this.positionX += Math.sin(this.angle) * length;
        this.positionY += Math.cos(this.angle) * length;
        this.instructions.push(Turtle.getPenUpInstructions(this.positionX, this.positionY));
    }

    goToPosition(x, y) {
        this.positionX = x;
        this.positionY = y;
        this.instructions.push("PU;");
        this.instructions.push(Turtle.getPenUpInstructions(this.positionX, this.positionY));
        if(!this.penUp) {
            this.instructions.push(`PD;`);
        }
    }

    setPenUp(state) {
        if(state) {
            this.instructions.push("PU;");
        } else {
            this.instructions.push("PD;");
        }
        this.penUp = state;
    }

    static getRadian(angleInDegrees) {
        return (angleInDegrees * Math.PI) / 180;
    }

    static getPenUpInstructions(x, y) {
        return `PA ${Math.round(x)}, ${Math.round(y)};`;
    }
}
