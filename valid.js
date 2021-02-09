do { 
var input = prompt("Please enter an integer to be squared between 0 and 100, non-inclusive");
} while (input<=0 || input >= 100);

console.log("Number squared is: " + parseInt(input) * parseInt(input));
