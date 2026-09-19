/* =========================================
   SEHAN//SYSTEM
   CYBERPUNK ANIMATION ENGINE
========================================= */


/* =========================================
   MATRIX DIGITAL RAIN
========================================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width;
let height;

let columns;
let drops;

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&<>[]{}";


function resizeMatrix() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    const fontSize = 14;

    columns = Math.floor(width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] =
            Math.random() * -50;

    }

}


function drawMatrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.06)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );

    ctx.font =
        "14px monospace";


    for (
        let i = 0;
        i < drops.length;
        i++
    ) {

        const character =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];


        ctx.fillStyle =
            "#00ffc8";


        ctx.fillText(
            character,
            i * 14,
            drops[i] * 14
        );


        if (
            drops[i] * 14 >
                height &&
            Math.random() > .975
        ) {

            drops[i] = 0;

        }


        drops[i]++;

    }

}


resizeMatrix();

window.addEventListener(
    "resize",
    resizeMatrix
);


setInterval(
    drawMatrix,
    45
);


/* =========================================
   TERMINAL TYPING EFFECT
========================================= */

const terminal =
    document.getElementById(
        "terminalText"
    );


const terminalLines = [

    "> Initializing system...",
    "> Loading profile...",
    "> Establishing secure connection...",
    "> Connection: SECURE",
    "> Scanning environment...",
    "> Access granted.",
    "> Welcome, Sehan.",
    "> System ready."

];


let lineIndex = 0;

let characterIndex = 0;


function typeTerminal() {

    if (
        lineIndex >=
        terminalLines.length
    ) {

        return;

    }


    const currentLine =
        terminalLines[lineIndex];


    if (
        characterIndex <
        currentLine.length
    ) {

        terminal.innerHTML +=
            currentLine[
                characterIndex
            ];

        characterIndex++;

        setTimeout(
            typeTerminal,
            35
        );

    } else {

        terminal.innerHTML +=
            "<br>";

        lineIndex++;

        characterIndex = 0;

        setTimeout(
            typeTerminal,
            350
        );

    }

}


typeTerminal();


/* =========================================
   MOUSE PARALLAX
========================================= */

const hero =
    document.querySelector(
        ".hero"
    );


const heroContent =
    document.querySelector(
        ".hero-content"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        if (!heroContent) {
            return;
        }


        const x =
            (event.clientX /
                window.innerWidth -
                .5) * 12;


        const y =
            (event.clientY /
                window.innerHeight -
                .5) * 8;


        heroContent.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================================
   PROJECT HOVER EFFECT
========================================= */

const projects =
    document.querySelectorAll(
        ".project"
    );


projects.forEach(
    (project) => {

        project.addEventListener(
            "mouseenter",
            () => {

                project.style.textShadow =
                    "0 0 10px #00ffc8";

            }
        );


        project.addEventListener(
            "mouseleave",
            () => {

                project.style.textShadow =
                    "none";

            }
        );

    }
);


/* =========================================
   SYSTEM CLOCK
========================================= */

setInterval(
    () => {

        const online =
            document.querySelector(
                ".online"
            );


        if (!online) {
            return;
        }


        online.innerHTML =
            `<span></span>
             SYSTEM ONLINE
             ${new Date()
                 .toLocaleTimeString(
                     "id-ID"
                 )}`;

    },
    1000
);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
    "%c SEHAN//SYSTEM ",
    "color:#00ffc8;font-size:20px;font-weight:bold;"
);

console.log(
    "System initialized."
);

console.log(
    "Status: ONLINE"
);
