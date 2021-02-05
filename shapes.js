console.log("Hello World");

var width = prompt("Please enter the rectangle width");
var height = prompt("Please enter the rectangle height");
var output = "";

console.log("Task A output: \n");

for (var i = 0; i < height; i++) {
   for (var j = 0; j < width; j++) {
       output += "*";
   }
   output += "\n";
}
console.log(output);
