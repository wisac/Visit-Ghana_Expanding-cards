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
if (document.body.scrollWidth < 768) {
    const navigate = document.createElement("div");
    const prevBtn = document.createElement("button");
    const nextBtn = document.createElement("button");
    prevBtn.textContent = "PREV"
    nextBtn.textContent = "NEXT";
    document.querySelector("main").appendChild(navigate);
    navigate.classList.add("navigate-box");
    navigate.appendChild(prevBtn);
    navigate.appendChild(nextBtn);
    nextBtn.classList.add("disabled")
    nextBtn.classList.add("navigate-btn");
    prevBtn.classList.add("navigate-btn");
    

    
        
    
    console.log("hello");
}
// let resizeTimeout;

// window.addEventListener('resize', function(event) {
//     clearTimeout(resizeTimeout);
    
//     resizeTimeout = setTimeout(function() {
//         console.log(event)
//         console.log(document.body.scrollHeight);
//     }, 250); // Adjust the delay (in milliseconds) as needed
// });





// if screenwidth less than mobile range
        //show only one panel and show next and previous buttons
