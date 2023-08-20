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

