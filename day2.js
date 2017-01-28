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
// var fruit = ["cherries", "apple", "bananas"];
// var fruitString = fruit.join(", ")
// console.log("fruitString", fruitString);

// var catColors = 'green,red,yellow,black';
// var catColorsArray = catColors.split(",");
// console.log("catColorArray", catColorsArray);

// var reverseFruit = fruit.reverse();
// console.log("reverseFruit",reverseFruit);

// var nums = [9,6,8,2,4,11,66];
// var numSort = nums.sort(function(a,b){return a-b});
// console.log("numSort", numSort);

// var mixedCrap = ["r", "m", 33, 9];
// console.log("mixedCrap sort", mixedCrap.sort());

// var animals = ["cats", "turtles", "fish", "bears", "tigers"];
// console.log("animal index of fish", animals.indexOf("fish"));

// var animals2 = animals.slice(2,4);
// console.log("animal slice", animals2);

// animals.splice(1,1);
// console.log("no turtles", animals);

// var colors = ["red", "blue", "gold", "pink", "orange"];

// // sort, reverse and make it a string
// var finalAnswer = colors.sort().reverse().join(" cat ");
// console.log("finalAnswer", finalAnswer);

// for(var i=0; i<5 ; i++) {
// 	console.log(i);
// }

// var fruit = ["cherries", "apple", "bananas", "oranges"];

//for(var j=0; j<fruit.length; j++) {
// 	console.log("fruit", fruit[j]);
// }

// write a for loop that increments by 10 each time = 10 times 10, 20 ... 100
for(var i = 10; i < 101; i+=10){
	console.log(i);
}
 // for loop that pushes the index to an array for 5 times console.log(array)\\[0,1,2,3,4]
 var newArray = [];
 for(var j = 0; j < 5; j++){
 	newArray.push(j);
 	console.log("array", j);
 }
console.log(newArray);
// for loop starts at 100 and divides by 2 each time 3 times = 100, 50, 25
for (x = 100; x > 12; x = x/2){
	console.log(x);
}
