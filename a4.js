"use strict";

function acronym() {
    let input = prompt("Enter some words");
    let acronym = "";
    let index = 0;
    let charMatch = 0;
    if (input === "" || !isNaN(input)) {
        alert("No phrase was inputted")
    } else {
        while (index <= input.length) {
            if (input.charAt(charMatch) === " " && acronym <= 0) {
                charMatch++;

            } else if (input.charAt(charMatch) !== " " && acronym <= 0) {
                acronym += input.charAt(charMatch);
            }
            if (acronym.length >= 1) {
                if (input.charAt(charMatch) !== " ") {
                    charMatch++;
                    if (input.charAt(charMatch) === " ") {
                        charMatch++;
                        if (input.charAt(charMatch) !== " ") {
                            acronym += input.charAt(charMatch);
                        }
                    }
                }

            }
            index++;
        }
        acronym = acronym.toUpperCase();
        document.getElementById("acoutput").innerHTML = acronym;
    }
}

function cross() {
    let row, star, space;
    let output = "";
    let i = +prompt("Enter rows (Odd number).");
    if (i % 2 !== 0) {
        for (row = 1; row <= i; row++) {
            if (row === ((i / 2 + 0.5))) {
                output += repString("*", i);
                output += "\n";
                row++;
            }
            for (space = 0; space < ((i / 2) - 0.5); space++) {
                output += "&nbsp;";
            }
            for (star = 1; star <= row;) {
                output += "*";
                break;
            }

            output += "\n";
        }

        document.getElementById("crossoutput").innerHTML = output;
    } else {
        i = alert("You did not enter a odd number.")
    }
}

function repString(string, num) {
    let repString = "";
    while (num > 0) {
        repString += string;
        num--;
    }
    return repString;
}