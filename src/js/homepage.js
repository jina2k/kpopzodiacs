var uMonth = "Month";
var uDay = "0";
var uYear = "0";
var boolMonth = false;
var boolDay = false;
var boolYear = false;
var memeResults;
var memeKeys;

function setEventListeners(){
    document.getElementById("about").addEventListener("click", redirectAbout);
    document.getElementById("disc").addEventListener("click", redirectDisc);
    document.getElementById("month").addEventListener("change", changeMonth);
    document.getElementById("day").addEventListener("change", changeDay);
    document.getElementById("year").addEventListener("change", changeYear);
    document.getElementById("sub").addEventListener("click", showResults);
}

function showResults() {
	//get same result from previous load:
	uMonth = document.getElementById("month").value;
	uDay = document.getElementById("day").value;
	uYear = document.getElementById("year").value;
	checkValues();
	document.getElementById("resultsdiv").innerHTML = "";
	if (!boolMonth) {
		document.getElementById("warningdiv").innerHTML = "Please enter a valid month.";
		return;
	}
	else if (!boolDay) {
		document.getElementById("warningdiv").innerHTML = "Please enter a valid day.";
		return;
	}
	else if (!boolYear) {
		document.getElementById("warningdiv").innerHTML = "Please enter a valid year.";
		return;
	}
	else {
		document.getElementById("warningdiv").innerHTML = "";
	}
	var daynum = parseInt(uDay);
	var yearnum = parseInt(uYear);
	var d = new Date();

	if (daynum < 1 || daynum > 31) {
		document.getElementById("warningdiv").innerHTML = "Please enter a valid day.";
		return;
	}
	else if (yearnum < 1900 || yearnum > d.getFullYear()) {
		document.getElementById("warningdiv").innerHTML = "Please enter a valid year.";
		return;
	}
	else {
		document.getElementById("warningdiv").innerHTML = "";
	}
	var fullString = [];
	if (uMonth == "January") {
		fullString.push("01");
	}
	else if (uMonth == "February") {
		fullString.push("02");
	}
	else if (uMonth == "March") {
		fullString.push("03");
	}
	else if (uMonth == "April") {
		fullString.push("04");
	}
	else if (uMonth == "May") {
		fullString.push("05");
	}
	else if (uMonth == "June") {
		fullString.push("06");
	}
	else if (uMonth == "July") {
		fullString.push("07");
	}
	else if (uMonth == "August") {
		fullString.push("08");
	}
	else if (uMonth == "September") {
		fullString.push("09");
	}
	else if (uMonth == "October") {
		fullString.push("10");
	}
	else if (uMonth == "November") {
		fullString.push("11");
	}
	else {
		fullString.push("12");
	}
	if (daynum == 1) {
		fullString.push("01");
	}
	else if (daynum == 2) {
		fullString.push("02");
	}
	else if (daynum == 3) {
		fullString.push("03");
	}
	else if (daynum == 4) {
		fullString.push("04");
	}
	else if (daynum == 5) {
		fullString.push("05");
	}
	else if (daynum == 6) {
		fullString.push("06");
	}
	else if (daynum == 7) {
		fullString.push("07");
	}
	else if (daynum == 8) {
		fullString.push("08");
	}
	else if (daynum == 9) {
		fullString.push("09");
	}
	else {
		fullString.push(uDay);
	}
	fullString.push(uYear);

	console.log(fullString[0]);
	console.log(fullString[1]);
	console.log(fullString[2]);

	
	var xhr = new XMLHttpRequest();
    var params = "month=" + fullString[0] + "&day=" + fullString[1] +
                 "&year=" + fullString[2];
    // OPEN- type, url/file, async
    xhr.open('POST', 'php/search.php', true);
    xhr.onerror = function() {
        console.log('Request Error...');
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //xhr.onprogress can be used to show loading screen
    //can also use xhr.onerror for error
    xhr.onload= function() {
    //200 ok, 403 forbidden, 404 not found
        if (this.status=200) {
        	if (this.responseText.includes("Error")) {
        		console.log("Error");
        	}
        	else {
        		memeResults = JSON.parse(this.responseText);
        		showEverything();
        	}
        }
        else {
        	if (this.status=403) {
				console.log("403 forbidden");
        	}
        	else {
				console.log("404 not found");
        	}
        }
    }
    xhr.send(params);
    
}

function redirectAbout() {
	location.replace(encodeURI("about_page.html"));
}

function redirectDisc() {
	location.replace(encodeURI("disclaimer.html"));
}

function changeMonth() {
	uMonth = document.getElementById("month").value;
}

function changeDay() {
	uDay = document.getElementById("day").value;
}

function changeYear() {
	uYear = document.getElementById("year").value;
}

function checkValues() {
	if (uMonth == "January" || uMonth == "February" || uMonth == "March" || uMonth == "April" || uMonth == "May" || uMonth == "June"
		 || uMonth == "July" || uMonth == "August" || uMonth == "September" || uMonth == "October" || uMonth == "November" || uMonth == "December") {
		boolMonth = true;
	}
	else {
		boolMonth = false;
	}
	var pattern = /^[0-9]{1,2}/;
	if (pattern.test(uDay)) {
		boolDay = true;
	}
	else {
		boolDay = false;
	}
	var pattern2 = /^[0-9]{4}/;
	if (pattern2.test(uYear)) {
		boolYear = true;
	}
	else {
		boolYear = false;
	}
}

function showEverything() {
	document.getElementById("bottombar").style.marginTop = "5%";
	memeKeys = Object.keys(memeResults);
	console.log(memeKeys);
	//month,day,year,zodiac
	var dayheader = document.createElement("h4");
	dayheader.style.color = "white";
	dayheader.textContent = "Celebrities born on the same day:";
	dayheader.textContent += " (" + memeResults[memeKeys[1]].length + ")";

	var daydiv = document.createElement("div");
	for (var i = 0; i < memeResults[memeKeys[1]].length; i++) {
		var adiv = document.createElement("a");
		adiv.href = memeResults[memeKeys[1]][i]['url'];

		var imgurl = "";

		var xhr = new XMLHttpRequest();
	    var params = "url=" + adiv.href;
	    xhr.open('POST', 'php/og_display.php', true);
	    xhr.onerror = function() {
	        console.log('Request Error...');
	    }
	    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	    //xhr.onprogress can be used to show loading screen
	    //can also use xhr.onerror for error
	    xhr.onload= function() {
	    //200 ok, 403 forbidden, 404 not found
	        if (this.status=200) {
	        	if (this.responseText.includes("Error")) {
	        		console.log("Error");
	        	}
	        	else {
	        		console.log(this.responseText);
	        		imgurl = this.responseText;
	        	}
	        }
	        else {
	        	if (this.status=403) {
					console.log("403 forbidden");
	        	}
	        	else {
					console.log("404 not found");
	        	}
	        }
	    }
	    xhr.send(params);

		adiv.style.color = "white";
		adiv.textContent = memeResults[memeKeys[1]][i]['stageName'] + " " + memeResults[memeKeys[1]][i]['birthday'];

		var ontopimg = document.createElement("img");
		ontopimg.src = imgurl;
		ontopimg.alt = "Picture of " + memeResults[memeKeys[1]][i]['stageName'];
		//forbidden access, project discontinued.
		//daydiv.appendChild(ontopimg);
		daydiv.appendChild(adiv);
		daydiv.appendChild(document.createElement("br"));
	}
	document.getElementById("resultsdiv").appendChild(dayheader);
	document.getElementById("resultsdiv").appendChild(daydiv);

	var yearheader = document.createElement("h4");
	yearheader.style.color = "white";
	yearheader.textContent = "Celebrities born on the same year:";
	yearheader.textContent += " (" + memeResults[memeKeys[2]].length + ")";
	yearheader.marginTop = "15px";

	var yeardiv = document.createElement("div");
	for (var i = 0; i < memeResults[memeKeys[2]].length; i++) {
		var adiv = document.createElement("a");
		adiv.href = memeResults[memeKeys[2]][i]['url'];

		var xhr = new XMLHttpRequest();
	    var params = "url=" + adiv.href;
	    xhr.open('POST', 'php/og_display.php', true);
	    xhr.onerror = function() {
	        console.log('Request Error...');
	    }
	    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	    //xhr.onprogress can be used to show loading screen
	    //can also use xhr.onerror for error
	    xhr.onload= function() {
	    //200 ok, 403 forbidden, 404 not found
	        if (this.status=200) {
	        	if (this.responseText.includes("Error")) {
	        		console.log("Error");
	        	}
	        	else {
	        		console.log(this.responseText);
	        	}
	        }
	        else {
	        	if (this.status=403) {
					console.log("403 forbidden");
	        	}
	        	else {
					console.log("404 not found");
	        	}
	        }
	    }
	    xhr.send(params);

		adiv.style.color = "white";
		adiv.textContent = memeResults[memeKeys[2]][i]['stageName'] + " " + memeResults[memeKeys[2]][i]['birthday'];
		yeardiv.appendChild(adiv);
		yeardiv.appendChild(document.createElement("br"));
	}
	document.getElementById("resultsdiv").appendChild(yearheader);
	document.getElementById("resultsdiv").appendChild(yeardiv);

	var zodiacheader = document.createElement("h4");
	zodiacheader.style.color = "white";
	zodiacheader.textContent = "Celebrities with the same ";
	zodiacheader.marginTop = "15px";
	zodiacheader.textContent += memeKeys[3] + ":";
	zodiacheader.textContent += " (" + memeResults[memeKeys[3]].length + ")";

	var zodiacdiv = document.createElement("div");
	for (var i = 0; i < memeResults[memeKeys[3]].length; i++) {
		var adiv = document.createElement("a");
		adiv.href = memeResults[memeKeys[3]][i]['url'];
		adiv.style.color = "white";
		adiv.textContent = memeResults[memeKeys[3]][i]['stageName'] + " " + memeResults[memeKeys[3]][i]['birthday'];
		zodiacdiv.appendChild(adiv);
		zodiacdiv.appendChild(document.createElement("br"));
	}
	document.getElementById("resultsdiv").appendChild(zodiacheader);
	document.getElementById("resultsdiv").appendChild(zodiacdiv);

	var monthheader = document.createElement("h4");
	monthheader.style.color = "white";
	monthheader.textContent = "Celebrities born on the same month:";
	monthheader.textContent += " (" + memeResults[memeKeys[0]].length + ")";
	monthheader.marginTop = "15px";

	var monthdiv = document.createElement("div");
	for (var i = 0; i < memeResults[memeKeys[0]].length; i++) {
		var adiv = document.createElement("a");
		adiv.href = memeResults[memeKeys[0]][i]['url'];
		adiv.style.color = "white";
		adiv.textContent = memeResults[memeKeys[0]][i]['stageName'] + " " + memeResults[memeKeys[0]][i]['birthday'];
		monthdiv.appendChild(adiv);
		monthdiv.appendChild(document.createElement("br"));
	}
	document.getElementById("resultsdiv").appendChild(monthheader);
	document.getElementById("resultsdiv").appendChild(monthdiv);
}