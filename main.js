function main() {
	let num1 = prompt("First Number");
	let num2 = prompt("Second Number");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	document.getElementById("plus").innerHTML = num1 + " + " + num2 + " = ";
	document.getElementById("plus").innerHTML += num1+num2;
	document.getElementById("minus").innerHTML = num1 + " - " + num2 + " = ";
	document.getElementById("minus").innerHTML += num1-num2;
	document.getElementById("multi").innerHTML = num1 + " * " + num2 + " = ";
	document.getElementById("multi").innerHTML += num1*num2;
	document.getElementById("divide").innerHTML = num1 + " / " + num2 + " = ";
	document.getElementById("divide").innerHTML += num1/num2;
	document.getElementById("remain").innerHTML = num1 + " % " + num2 + " = ";
	document.getElementById("remain").innerHTML += num1%num2;
}