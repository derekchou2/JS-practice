var input = prompt("Please enter all values to be added, separated by spaces");
var arr = input.split(" ");
var sum = 0;

arr.forEach(element => sum += parseInt(element));

console.log("Sum of inputs: " + sum);


//-----------------------------------------------------------------------------------------------------------------
//part 2
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

//------------------------------------------------------------------------------------------------------------------------------------------------
//Part 3
var input3 = prompt("Please enter all values to be added and subtracted, separated by + or -. You may enter multiple expressions, separated by ;");
var sum3 = 0;
var num3 = "";
var positive3 = true;

var arr3 = input3.split(";");

//outer loop handles each expression to be calculated
for (var i = 0; i < arr3.length - 1; i++) {


    //same logic as calc1
    for (var j = 0; j < arr3[i].length; j++) {
        if (arr3[i][j] == " ") {
            //do nothing if input is space
        }
        else if (arr3[i][j] == "+") {
            positive3 = true;
        }
        else if (arr3[i][j] == "-") {
            //if input is -, flip sign of next input
            positive3 = false;
        }
        else {
            // current input is number for sure
    
            // is this the last input? If so add it to num and add num to sum
            if (j == arr3[i].length - 1) {
                if (positive3) {
                    num3 += arr3[i][j];
                    sum3 += parseInt(num3);
                    num3 = "";
                }
                else {
                    num3 += arr3[i][j];
                    sum3 -= parseInt(num3);
                    num3 = "";
                }
                break;
            }
    
            //check next input, if its not a digit, add current digit to num and restart outermost loop
            if (arr3[i][j+1] != " " && arr3[i][j+1] != "-" && arr3[i][j+1] != "+") {
                num3 += arr3[i][j];
                continue;
            }
    
    
            //if next input is not number, stop parsing, add num to sum
            if (positive3) {
                num3 += arr3[i][j];
                sum3 += parseInt(num3);
                num3 = "";
            }
            else {
                num3 += arr3[i][j];
                sum3 -= parseInt(num3);
                num3 = "";
            }
    
    
    
    
        }
    }

    console.log("Answer " + (i+1) + ": " + sum3 + "\n");
    sum3 = 0;


}
//-----------------------------------------------------------------------------------------------------------------------------------------
//part 4
var input4 = prompt("Please enter all values to be added, subtracted, or squared, separated by + or - or ^. You may enter multiple expressions, separated by ;");
var sum4 = 0;
var num4 = "";
var positive4 = true;

var arr4 = input4.split(";");

//outer loop handles each expression to be calculated
for (var i = 0; i < arr4.length - 1; i++) {


    //same logic as calc1
    for (var j = 0; j < arr4[i].length; j++) {
        if (arr4[i][j] == " ") {
            //do nothing if input is space
        }
        else if (arr4[i][j] == "+") {
            positive4 = true;
        }
        else if (arr4[i][j] == "-") {
            //if input is -, flip sign of next input
            positive4 = false;
        }

        else if (arr4[i][j] == "^") {
            //if input is ^, ignore, we handle in the else block
        }
        else {
            // current input is number for sure
    
            // is this the last input? If so add it to num and add num to sum
            if (j == arr4[i].length - 1) {
                if (positive4) {
                    num4 += arr4[i][j];
                    sum4 += parseInt(num4);
                    num4 = "";
                }
                else {
                    num4 += arr4[i][j];
                    sum4 -= parseInt(num4);
                    num4 = "";
                }
                break;
            }
    
            //check next input, if its a digit, add current digit to num and restart outermost loop
            if (arr4[i][j+1] != " " && arr4[i][j+1] != "-" && arr4[i][j+1] != "+" && arr4[i][j+1] != "^") {
                num4 += arr4[i][j];
                continue;
            }

            //if next input is square, square num and add or subtract it to sum, restart outermost loop
            if (arr4[i][j+1] == "^") {
                if (positive4) {
                    num4 += arr4[i][j];
                    sum4 += Math.pow(parseInt(num4), 2);
                    num4 = "";
                }
                else {
                    num4 += arr4[i][j];
                    sum4 -= Math.pow(parseInt(num4), 2);
                    num4 = "";
                }
                continue;
            }

    
            //if next input is not number, stop parsing, add num to sum
            if (positive4) {
                num4 += arr4[i][j];
                sum4 += parseInt(num4);
                num4 = "";
            }
            else {
                num4 += arr4[i][j];
                sum4 -= parseInt(num4);
                num4 = "";
            }
        }
    }

    console.log("Answer " + (i+1) + ": " + sum4 + "\n");
    sum4 = 0;


}