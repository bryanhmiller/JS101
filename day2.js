// var day = "Friday";

// switch(day) {
// 	case "Monday":
// 		console.log("Boooooo");
// 	case "Friday":
// 		console.log("PARTAY");
// 		break;
// 	default:
// 		console.log("not Monday");
// }

// if(day === "Monday"){
// 	console.log("Boooooo");
// } else if(day === "Friday"){
// 	console.log("PARTAY");
// } else {
// 	console.log("not Monday");
// }
//ARRAYS
var fruit = ["cherries", "apple", "bananas"];
var fruitString = fruit.join(", ")
console.log("fruitString", fruitString);

var catColors = 'green,red,yellow,black';
var catColorsArray = catColors.split(",");
console.log("catColorArray", catColorsArray);

var reverseFruit = fruit.reverse();
console.log("reverseFruit",reverseFruit);

var nums = [9,6,8,2,4,11,66];
var numSort = nums.sort(function(a,b){return a-b});
console.log("numSort", numSort);

var mixedCrap = ["r", "m", 33, 9];
console.log("mixedCrap sort", mixedCrap.sort());

var animals = ["cats", "turtles", "fish", "bears", "tigers"];
console.log("animal index of fish", animals.indexOf("fish"));

var animals2 = animals.slice(2,4);
console.log("animal slice", animals2);

animals.splice(1,1);
console.log("no turtles", animals);

var colors = ["red", "blue", "gold", "pink", "orange"];

// sort, reverse and make it a string
var finalAnswer = colors.sort().reverse().join(" cat ");
console.log("finalAnswer", finalAnswer);