var fancyPoem = document.getElementById('sonnet');

var sonnet = fancyPoem.innerHTML;

console.log("indexOf", sonnet.indexOf("orphans"));
console.log("length", sonnet.length);
var winter = sonnet.replace("winter","yuletide");
var large = winter.replace(/the/g,"a large");
fancyPoem.innerHTML = large;
