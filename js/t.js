// Tsugumomo
function cdtd() {
	var tsugu = new Date("June 04, 2017 08:30:00 ");
	var now = new Date();
	var timeDiff = tsugu.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("tsugud").innerHTML = days;
	document.getElementById("tsuguh").innerHTML = hours;
	document.getElementById("tsugum").innerHTML = minutes;
	document.getElementById("tsugus").innerHTML = seconds;
	
	var timer = setTimeout('cdtd()',1000);
	
}
// Zero kara
function cdtdzero() {
	var zero = new Date("June 05, 2017 08:30:00 ");
	var now = new Date();
	var timeDiff = zero.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("zerod").innerHTML = days;
	document.getElementById("zeroh").innerHTML = hours;
	document.getElementById("zerom").innerHTML = minutes;
	document.getElementById("zeros").innerHTML = seconds;
	
	var timer = setTimeout('cdtdzero()',1000);
	
}
//Rokudenashi
function cdtdakr() {
	var akr = new Date("June 06, 2017 08:30:00 ");
	var now = new Date();
	var timeDiff = akr.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("akrd").innerHTML = days;
	document.getElementById("akrh").innerHTML = hours;
	document.getElementById("akrm").innerHTML = minutes;
	document.getElementById("akrs").innerHTML = seconds;
	
	var timer = setTimeout('cdtdakr()',1000);
	
}

//SukaSuka
function cdtdsuka() {
	var suka = new Date("June 06, 2017 09:00:00 ");
	var now = new Date();
	var timeDiff = suka.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("sukad").innerHTML = days;
	document.getElementById("sukah").innerHTML = hours;
	document.getElementById("sukam").innerHTML = minutes;
	document.getElementById("sukas").innerHTML = seconds;
	
	var timer = setTimeout('cdtdsuka()',1000);
	
}
//SaeKano
function cdtdsaek() {
	var saek = new Date("June 08, 2017 14:00:00 ");
	var now = new Date();
	var timeDiff = saek.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("saekd").innerHTML = days;
	document.getElementById("saekh").innerHTML = hours;
	document.getElementById("saekm").innerHTML = minutes;
	document.getElementById("saeks").innerHTML = seconds;
	
	var timer = setTimeout('cdtdsaek()',1000);
	
}

//tsuki Boukun
function cdtdtsuki() {
	var tsuki = new Date("June 08, 2017 12:10:00 ");
	var now = new Date();
	var timeDiff = tsuki.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("tsukid").innerHTML = days;
	document.getElementById("tsukih").innerHTML = hours;
	document.getElementById("tsukim").innerHTML = minutes;
	document.getElementById("tsukis").innerHTML = seconds;
	
	var timer = setTimeout('cdtdtsuki()',1000);
	
}

//Renai Boukun
function cdtdrenai() {
	var renai = new Date("June 08, 2017 12:10:00 ");
	var now = new Date();
	var timeDiff = renai.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("renaid").innerHTML = days;
	document.getElementById("renaih").innerHTML = hours;
	document.getElementById("renaim").innerHTML = minutes;
	document.getElementById("renais").innerHTML = seconds;
	
	var timer = setTimeout('cdtdrenai()',1000);
	
}
//Hinako Note
function cdtdhinako() {
	var hinako = new Date("June 09, 2017 06:30:00 ");
	var now = new Date();
	var timeDiff = hinako.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("hinakod").innerHTML = days;
	document.getElementById("hinakoh").innerHTML = hours;
	document.getElementById("hinakom").innerHTML = minutes;
	document.getElementById("hinakos").innerHTML = seconds;
	
	var timer = setTimeout('cdtdhinako()',1000);
	
}
//Sword Oratoria
function cdtdsword() {
	var sword = new Date("June 09, 2017 09:30:00 ");
	var now = new Date();
	var timeDiff = sword.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("swordd").innerHTML = days;
	document.getElementById("swordh").innerHTML = hours;
	document.getElementById("swordm").innerHTML = minutes;
	document.getElementById("swords").innerHTML = seconds;
	
	var timer = setTimeout('cdtdsword()',1000);
	
}
//Shingeki no Kyojin
function cdtdaot() {
	var aot = new Date("June 03, 2017 07:30:00 ");
	var now = new Date();
	var timeDiff = aot.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("aotd").innerHTML = days;
	document.getElementById("aoth").innerHTML = hours;
	document.getElementById("aotm").innerHTML = minutes;
	document.getElementById("aots").innerHTML = seconds;
	
	var timer = setTimeout('cdtdaot()',1000);
	
}
//Eromanga-sensei
function cdtdero() {
	var ero = new Date("June 03, 2017 10:00:00 ");
	var now = new Date();
	var timeDiff = ero.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("erod").innerHTML = days;
	document.getElementById("eroh").innerHTML = hours;
	document.getElementById("erom").innerHTML = minutes;
	document.getElementById("eros").innerHTML = seconds;
	
	var timer = setTimeout('cdtdero()',1000);
	
}
//Dragon Ball Super
function cdtddragon() {
	var dragon = new Date("June 03, 2017 18:15:00 ");
	var now = new Date();
	var timeDiff = dragon.getTime() - now.getTime();
	
	var seconds = Math.floor(timeDiff / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("dragond").innerHTML = days;
	document.getElementById("dragonh").innerHTML = hours;
	document.getElementById("dragonm").innerHTML = minutes;
	document.getElementById("dragons").innerHTML = seconds;
	
	var timer = setTimeout('cdtddragon()',1000);
	
}