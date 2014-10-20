var Operator = function() {
  function log(text) { console.log("Dummy Operator: " + text); }

  function scrollUp(n)    { log("scroll up: " + n); };
  function scrollDown(n)  { log("scroll down: " + n); };
  function leftAction()   { log("leftAction"); };
  function rightAction()  { log("rightAction"); };
  this.readSection = function(n) { log("readSection: " + n); };
};
