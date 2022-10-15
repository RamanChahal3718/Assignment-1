"use strict";
//IIFE -- Immediately Invoked Function Expression
// AKA - Self Executing Function 
(function () {
    // First method of using functions
    function Start() {
        console.log(document.getElementById('mission'));
        let x = document.getElementById('mission');
        x.textContent = "aasdf";
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map