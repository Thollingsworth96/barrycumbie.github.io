
$(document).ready(function() {
//var allDOMElements = document;
//console.log(allDOMElements);
var all = document.getElementsByTagName("*");

for (var i=0, max=all.length; i < max; i++) {
     // Do something with the element here
	console.log(all[i].tagName);
	
}
	
});	
