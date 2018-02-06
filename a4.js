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
  let toPrint = "";
  let i = +prompt("Enter rows of stars to print.");

  for (row = 1; row <= i; row++) {
    if (row === ((i/2+0.5))) {
		toPrint += repString("*",i);
		toPrint += "\n";
		row++;
	} 
	  for (space = 0; space < ((i/2)-0.5); space++){
      toPrint += "&nbsp;";
    }
    for (star = 1; star <= row; ) {
      toPrint += "*";
		break;
    }

    toPrint += "\n";
	}
  
  document.getElementById("crossoutput").innerHTML = toPrint;
}

	function repString(string, num) {
  let repString = "";
  while (num > 0) {
    repString += string;
    num--;
  }
  return repString;
}