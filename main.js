"use strict";

const panels = document.querySelectorAll(".panel");

const links = document.querySelectorAll(".link");

//listen to clicked panel and activate it then deactivate all others
for (let panel of panels.values()) {
    panel.addEventListener("click", function () {
        if (document.documentElement.getBoundingClientRect().width > 768) {
            removeActivePanel();
            panel.classList.add("active");
            dotEnabler();
        }

    });
}



//function to deactivate all panels
function removeActivePanel() {
    panels.forEach(function (panel, i) {
        panel.classList.remove("active");
        links[i].classList.remove("active");
    });
}

///////////////////////////////////////////////
//MOBILE VIEW
let activePanelIndex = 0;
document.addEventListener("DOMContentLoaded", () => {

    if (document.documentElement.getBoundingClientRect().width < 768) {
        //Add buttons and set init state
        // const navigate = document.createElement("div");
        // const prevBtn = document.createElement("button");
        // const nextBtn = document.createElement("button");

        // document.querySelector("main").appendChild(navigate);
        // navigate.appendChild(prevBtn);
        // navigate.appendChild(nextBtn);
        // navigate.classList.add("navigate-box");
        // prevBtn.textContent = "PREV";
        // nextBtn.textContent = "NEXT";
        // nextBtn.classList.add("navigate-btn");
        // prevBtn.classList.add("navigate-btn");


        // //Active panel is the first so can't go back
        // prevBtn.setAttribute("disabled", "true");

        // //navigate forward
        // nextBtn.addEventListener("click", () => {
        //     switchPanel("next");
        //     btnDisabler(prevBtn, nextBtn);
        // });

        // //navigate back
        // prevBtn.addEventListener("click", () => {
        //     switchPanel("prev");
        //     btnDisabler(prevBtn, nextBtn);
        // });


        swiping();


    }


    //////////SWIPING   FUNCTION
    function swiping() {
        // Get a reference to the element you want to add swipe functionality to
        const swipeElement = document.querySelector('main');

        let startX;
        let endX;
        let moved = false;

        // Add touchstart event listener
        swipeElement.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;

        });

        // Add touchmove event listener
        swipeElement.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
            moved = true;

        });

        // Add touchend event listener
        swipeElement.addEventListener('touchend', (e) => {
            const deltaX = endX - startX;


            // Horizontal swipe detected
            if (deltaX && moved) {
                if (deltaX > 10) {

                    switchPanel("prev");
                    // Swipe right
                    // Your code for handling right swipe here
                } else {
                    switchPanel("next");

                }
            }
            moved = false;

        });

    }


    //switch panels
    function switchPanel(move) {
        if (move === "next" && activePanelIndex < panels.length - 1) {
            removeActivePanel();
            panels[++activePanelIndex].classList.add("active");
            links[activePanelIndex].classList.add("active");

            dotEnabler();


        }


        else if (move === "prev" && activePanelIndex > 0) {
            removeActivePanel();

            panels[--activePanelIndex].classList.add("active");
            links[activePanelIndex].classList.add("active");
            dotEnabler();


        }


    }



    //when active panel is first or last
    function btnDisabler(back, next) {
        if (activePanelIndex >= 9) next.setAttribute("disabled", "true");
        else next.removeAttribute("disabled");
        if (activePanelIndex > 0) back.removeAttribute("disabled");
        else back.setAttribute("disabled", "true");
    }

});



//////////////
//Dot indicators
const dotsDiv = document.querySelector(".dots-container");

//function to create dots
function createDots() {
    for (let i = 0; i < panels.length; i++) {
        const dot = document.createElement("button");
        dot.classList.add(...["dot", `dot-${i + 1}`]);
        dotsDiv.appendChild(dot);
    }
}

createDots();

const allDots = document.querySelectorAll(".dot");

//function to enable active dot
function dotEnabler() {
    allDots.forEach(dot => {
        dot.classList.remove("dot-active");
    });

    allDots[activePanelIndex].classList.add("dot-active");

}

dotEnabler();