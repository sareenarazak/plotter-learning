let state = "F";

for (let i = 0; i < 10; i++) {
    let newState = "";
    for(const s of state) {
        if(s === "F") {
            newState += "F+G"
        }

        else if(s === "G") {
            newState += "F-G"
        }
        else {
            newState += s;
        }
    }
    state = newState;}

let angle = 0;
const d = 100;

console.log(`IN;SP1;PA6500,4000;PD;`);

for (let i = 0; i < 4; i++) {
    for (const c of state) {
        switch (c) {
            case "-":
                angle = (angle + 1) % 4;
                break;
            case "+":
                angle = angle ? (angle - 1) : 3;
                break;
            case "F":
            case "G":
                switch (angle) {
                    case 0:
                        console.log(`PR0,${d};`)
                        break;
                    case 1:
                        console.log(`PR${d},0;`)
                        break;
                    case 2:
                        console.log(`PR0,${-d};`)
                        break;
                    case 3:
                        console.log(`PR${-d},0;`)
                        break;
                }
                break;
        }
    }
    angle = angle ? (angle - 1) : 3;
}

console.log("PU;")
