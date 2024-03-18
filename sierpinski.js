let state = "F-G-G";
// F−G+F+G−F
for (let i = 0; i < 6; i++) {
    let newState = "";
    for(const s of state) {
        if(s === "F") {
            newState += "F-G+F+G-F"
        }

        else if(s === "G") {
            newState += "GG"
        }
        else {
            newState += s;
        }
     }
    state = newState;
}

let angle = 0;
const d = 100;

console.log(`IN;SP1;PA7900,600;PD;`);

    for (const c of state) {
        switch (c) {
            case "-":
                angle = (angle + 1) % 3;
                break;
            case "+":
                angle = angle ? (angle - 1) : 2;
                break;
            case "F":
            case "G":
                switch (angle) {
                    case 0:
                        console.log(`PR0,${d};`)
                        break;
                    case 1:
                        console.log(`PR${-Math.round(Math.sin(2 * Math.PI / 3) * d) },${Math.round(Math.cos(2 * Math.PI / 3) * d)};`)
                        break;
                    case 2:
                        console.log(`PR${Math.round(Math.sin(2 * Math.PI / 3) * d) },${Math.round(Math.cos(2 * Math.PI / 3) * d)};`)
                        break;
                }
                break;
        }
    }


console.log("PU;")
