
var width1 = prompt("Please enter the rectangle width");
var height1 = prompt("Please enter the rectangle height");
var output1 = "";
var output2 = "";
var output3 = "";
var output4 = "";
var output5 = "";
var output6 = "";

console.log("Task A output: \n");

for (var i = 0; i < height1; i++) {
   for (var j = 0; j < width1; j++) {
       output1 += "*";
   }
   output1 += "\n";
}
console.log(output1);

console.log("Task B output: \n");
var width2 = prompt("Please enter the checkerboard width");
var height2 = prompt("Please enter the checkerboard height");
var star = true;
for (var i = 0; i < height2; i++) {
    for (var j = 0; j < width2; j++) {
        if (star) {
            output2 += "*";
        }
        else {
            output2 += " ";
        }
        star = !star;
    }
    output2 += "\n";
 }
 console.log(output2);


console.log("Task C output: \n");
var height3 = prompt("Please enter the cross height");
var width3 = height3;

for (var i = 1; i <= height3; i++) {
    for (var j = 1; j <= width3; j++) {
        if (i == j || (i + j) == (parseInt(height3) + 1)) {
            // print * only twice per line
            output3 += "*";
        }
        else {
            output3 += " ";
        }
    }
    output3 += "\n";
}


console.log(output3);



console.log("Task D output: \n");
var height4 = prompt("Please enter the triangle side length");
for (var i = 1; i <= height4; i++) {
    var counter = i;
        while (counter > 0) {
            output4 += "*";
            counter--;
        }
    output4 += "\n";
}
console.log(output4);

console.log("Task E output: \n");
var height5 = prompt("Please enter the triangle side length");
for (var i = 1; i <= height5; i++) {
    var counter = i;
    var spaceCounter = i;

        while (spaceCounter > 1) {
            output5 += " ";
            spaceCounter--;
        }
        while (counter <= height5) {
            output5 += "*";
            counter++;
        }
    output5 += "\n";
}
console.log(output5);


console.log("Task F output: \n");
var width6 = prompt("Please enter the trapezoid width");
var height6 = prompt("Please enter the trapezoid height");
var spaces = 0;
var stars = width6;

if (parseInt(height6) > (parseInt(width6) / 2)) {
    throw 'Impossible Shape!';
}

for (var i = 1; i <= height6; i++) {
    var spaceCounter2 = spaces;
    var starCounter2 = stars;

    while (spaceCounter2 > 0) {
        output6 += " ";
        spaceCounter2--;
    }
    while (starCounter2 > 0) {
        output6 += "*";
        starCounter2--;
    }

    spaces += 1;
    stars -= 2;
    output6 += "\n";
}
console.log(output6);


