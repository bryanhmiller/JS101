// Objects

// var myCat = {
// 	tail: "long",
// 	age: 29,
// 	color: "blue",
// 	friends: ["zoe", "callan", "lauren"]
// }
// console.log("myCat before", myCat);
// myCat.owner = "zoe"
// console.log("myCat after", myCat);
// console.log("Age of cat: ", myCat.age);
// console.log("Color of cat: ", myCat["color"]);

// for(var myKey in myCat){
// 	console.log("myKey", myKey);
// 	console.log("values", myCat[myKey]);
// }

// Functions

function nuggetMaker(animal) {
	var myNugget = "breading " + animal + " breading";
	return myNugget;
}

function shackMaker(divLocation, typeOfNugget){
	divLocation.innerHTML += typeOfNugget;
}

var chickenNuggets = nuggetMaker("chicken");
shackMaker(availElement, chickenNuggets);
var lobsterNuggets = nuggetMaker("lobster");
shackMaker(availElement, lobsterNuggets);
var tablets = nuggetMaker("myComputer");
shackMaker(availElement, tablets);

// var myanimals = ["cats", "pigs", "chickens", "cows", "bears"];

// function myLooper(myArray) {
// 	for (var i = 0; i < myArray.length; i++)
// 	console.log(myArray[i]);
// }

// myLooper(myanimals);
