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



//MOBILE VIEW
let resizeTimeout;

window.addEventListener('resize', function(event) {
    clearTimeout(resizeTimeout);
    
    resizeTimeout = setTimeout(function() {
        console.log(event)
        console.log(document.body.scrollHeight);
    }, 250); // Adjust the delay (in milliseconds) as needed
});


// if screenwidth less than mobile range
        //show only one panel and show next and previous buttons
        