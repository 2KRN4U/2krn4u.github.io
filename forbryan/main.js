// JavaScript Document
let result = "";

function startConvert(){

	let a = document.getElementById('text').value
	let b = document.getElementById('text2').value
	a = parseFloat(a, 10);
	b = parseFloat(b, 10);

	result = a * 100 / b;

	document.getElementById('results').innerHTML = result;
}

function convert(event){
	if (event.keyCode == 13 || event.which == 13){
		let a = document.getElementById('text').value
		let b = document.getElementById('text2').value
		a = parseFloat(a, 10);
		b = parseFloat(b, 10);

		result = a * 100 / b;

		result = Math.round(result);

		document.getElementById('results').innerHTML = result;
	}

}