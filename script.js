// ========================================
// SEHAN//SYSTEM
// CYBERPUNK ANIMATION
// ========================================


// ===============================
// NEON RAIN
// ===============================

const canvas =
    document.getElementById("rain");

if (canvas) {

    const ctx =
        canvas.getContext("2d");

    let width;
    let height;

    let drops = [];


    function resize() {

        width =
            canvas.width =
            window.innerWidth;

        height =
            canvas.height =
            window.innerHeight;


        const amount =
            Math.floor(width / 8);


        drops = [];


        for (
            let i = 0;
            i < amount;
            i++
        ) {

            drops.push({

                x:
                    Math.random() *
                    width,

                y:
                    Math.random() *
                    height,

                speed:
                    7 +
                    Math.random() * 12,

                length:
                    12 +
                    Math.random() * 25

            });

        }

    }


    function rain() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        drops.forEach(
            drop => {

                const bright =
                    Math.random() >
                    .86;


                ctx.strokeStyle =
                    bright

                    ?

                    "rgba(0,255,255,.85)"

                    :

                    "rgba(80,180,255,.30)";


                ctx.beginPath();


                ctx.moveTo(
                    drop.x,
                    drop.y
                );


                ctx.lineTo(
                    drop.x - 2,
                    drop.y +
                    drop.length
                );


                ctx.stroke();


                drop.y +=
                    drop.speed;


                if (
                    drop.y >
                    height
                ) {

                    drop.y =
                        -Math.random() *
                        100;

                    drop.x =
                        Math.random() *
                        width;

                }

            }
        );


        requestAnimationFrame(
            rain
        );

    }


    resize();

    window.addEventListener(
        "resize",
        resize
    );

    rain();

}



// ===============================
// CLOCK
// ===============================

const clock =
    document.getElementById(
        "clock"
    );


function updateClock() {

    if (!clock)
        return;


    const now =
        new Date();


    clock.textContent =
        now.toLocaleTimeString(
            "id-ID",
            {
                hour12:false
            }
        );

}


updateClock();


setInterval(
    updateClock,
    1000
);



// ===============================
// TERMINAL
// ===============================

const terminal =
    document.getElementById(
        "terminal"
    );


const messages = [

    "> Initializing system...",

    "> Loading cyber interface...",

    "> Connecting to network...",

    "> Connection: SECURE",

    "> Firewall: ACTIVE",

    "> Encryption: ENABLED",

    "> Scanning environment...",

    "> Access granted.",

    "> Welcome, Sehan.",

    "> System ready."

];


let line = 0;

let character = 0;


function typeTerminal() {

    if (!terminal)
        return;


    if (
        line >=
        messages.length
    ) {

        return;

    }


    const current =
        messages[line];


    if (
        character <
        current.length
    ) {

        terminal.textContent +=
            current[character];

        character++;


        setTimeout(
            typeTerminal,
            30
        );

    }

    else {

        terminal.innerHTML +=
            "<br>";

        line++;

        character = 0;


        setTimeout(
            typeTerminal,
            300
        );

    }

}


typeTerminal();



// ===============================
// PARALLAX
// ===============================

const image =
    document.querySelector(
        ".hero-image"
    );


const heroText =
    document.querySelector(
        ".hero-content"
    );


document.addEventListener(
    "mousemove",
    event => {

        if (
            window.innerWidth <
            800
        )
            return;


        const x =
            event.clientX /
            window.innerWidth -
            .5;


        const y =
            event.clientY /
            window.innerHeight -
            .5;


        if (image) {

            image.style.transform =
                `
                scale(1.075)
                translate3d(
                    ${x * -10}px,
                    ${y * -6}px,
                    0
                )
                `;

        }


        if (heroText) {

            heroText.style.transform =
                `
                translate3d(
                    ${x * 5}px,
                    ${y * 3}px,
                    0
                )
                `;

        }

    }
);



// ===============================
// RANDOM GLITCH
// ===============================

const glitch =
    document.querySelector(
        ".glitch"
    );


if (glitch) {

    setInterval(
        () => {

            glitch.style.transform =
                "translate(-4px,2px)";


            setTimeout(
                () => {

                    glitch.style.transform =
                        "translate(4px,-2px)";

                },
                70
            );


            setTimeout(
                () => {

                    glitch.style.transform =
                        "translate(0)";

                },
                140
            );

        },
        4000
    );

}



// ===============================
// SKILL ANIMATION
// ===============================

const skills =
    document.querySelectorAll(
        ".skill i"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const bar =
                            entry.target;


                        const width =
                            bar.style.width;


                        bar.style.width =
                            "0";


                        setTimeout(
                            () => {

                                bar.style.width =
                                    width;

                            },
                            200
                        );


                        observer.unobserve(
                            bar
                        );

                    }

                }
            );

        }
    );


skills.forEach(
    bar =>
        observer.observe(bar)
);



// ===============================
// CONSOLE
// ===============================

console.log(
    "%c SEHAN//SYSTEM ",
    `
    color:#00ffff;
    font-size:24px;
    font-weight:bold;
    `
);

console.log(
    "SYSTEM ONLINE"
);
