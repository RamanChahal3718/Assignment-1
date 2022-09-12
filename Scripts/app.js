// IIFE -- Immediatly Invoked function Expression
// AKA- Self executing function
(function()
{
    function Start()
    {
console.log("App Started");
    }
    window.addEventListener("load", Start);

})();