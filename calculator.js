// var input = prompt("Please enter all values to be added, separated by spaces");
// var arr = input.split(" ");
// var sum = 0;

// arr.forEach(element => sum += parseInt(element));

// console.log("Sum of inputs: " + sum);

var input2 = prompt("Please enter all values to be added and subtracted, separated by + or -");
var sum2 = 0;
var num = "";
var positive = true;
for (var i = 0; i < input2.length; i++) {
    if (input2[i] == " ") {
        //do nothing if input is space
    }
    else if (input2[i] == "+") {
        positive = true;
    }
    else if (input2[i] == "-") {
        //if input is -, flip sign of next input
        positive = false;
    }
    else {
        // current input is number for sure

        // is this the last input? If so add it to num and add num to sum
        if (i == input2.length - 1) {
            if (positive) {
                num += input2[i];
                sum2 += parseInt(num);
                num = "";
            }
            else {
                num += input2[i];
                sum2 -= parseInt(num);
                num = "";
            }
            break;
        }

        //check next input, if its not a digit, add current digit to num and restart outermost loop
        if (input2[i + 1] != " " && input2[i + 1] != "-" && input2[i + 1] != "+") {
            num += input2[i];
            continue;
        }


        //if next input is not number, stop parsing, add num to sum
        if (positive) {
            num += input2[i];
            sum2 += parseInt(num);
            num = "";
        }
        else {
            num += input2[i];
            sum2 -= parseInt(num);
            num = "";
        }




    }
}
console.log("Sum of all inputs: " + sum2)