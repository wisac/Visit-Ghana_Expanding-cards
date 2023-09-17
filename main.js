"use strict";

const panels = document.querySelectorAll(".panel");

//listen to clicked panel and activate it then deactivate all others
for (let panel of panels.values()) {
    panel.addEventListener("click", function () {
        removeActivePanel();
        panel.classList.add("active");
    });
}

//function to deactivate all panels
function removeActivePanel() {
    panels.forEach(function (panel) {
        panel.classList.remove("active");
    });
}

///////////////////////////////////////////////
//MOBILE VIEW
let activePanelIndex = 0;
document.addEventListener("DOMContentLoaded", () => {

    if (document.documentElement.getBoundingClientRect().width < 768) {
        //Add buttons and set init state
        const navigate = document.createElement("div");
        const prevBtn = document.createElement("button");
        const nextBtn = document.createElement("button");

        document.querySelector("main").appendChild(navigate);
        navigate.appendChild(prevBtn);
        navigate.appendChild(nextBtn);
        navigate.classList.add("navigate-box");
        prevBtn.textContent = "PREV";
        nextBtn.textContent = "NEXT";
        nextBtn.classList.add("navigate-btn");
        prevBtn.classList.add("navigate-btn");


        //Active panel is the first so can't go back
        prevBtn.setAttribute("disabled", "true");

        //navigate forward
        nextBtn.addEventListener("click", () => {
            switchPanel("next");
            btnDisabler(prevBtn, nextBtn);
        });

        //navigate back
        prevBtn.addEventListener("click", () => {
            switchPanel("prev");
            btnDisabler(prevBtn, nextBtn);
        });


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
            console.log("start", startX);
            // console.log(e);
        });

        // Add touchmove event listener
        swipeElement.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
            moved = true;
            console.log("end", endX);
            // console.log(e)
        });

        // Add touchend event listener
        swipeElement.addEventListener('touchend', (e) => {
            const deltaX = endX - startX;
            console.log("delta", deltaX);
           
            // Horizontal swipe detected
            if (deltaX && moved) {
                if (deltaX > 0) {
                    console.log("right");
                    // alert("swiped-right");
                    switchPanel("next");
                    // Swipe right
                    // Your code for handling right swipe here
                } else {
                    switchPanel("prev");
                    console.log("left");
                    // Swipe left
                    // Your code for handling left swipe here
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

        }


        else if (move === "prev" && activePanelIndex > 0) {
            removeActivePanel();

            panels[--activePanelIndex].classList.add("active");

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


// let resizeTimeout;

// window.addEventListener('resize', function(event) {
//     clearTimeout(resizeTimeout);

//     resizeTimeout = setTimeout(function() {
//         console.log(event)
//         console.log(document.body.scrollHeight);
//     }, 250); // Adjust the delay (in milliseconds) as needed
// });

/* if screenwidth less than mobile range
        //show only one panel and show next and previous buttons
        //know the active panel
        //when next is clicked: 
            disable all panels
            show next panel in the array
        //when prev is clicked:
            disable all panels
            show prev panel in array

            
            
        
*/
