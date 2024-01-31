//your JS code here. If required.
function daysOfYear(year) {
	let days=0;
	if(year % 400===0)days=366;
	else if(year % 100===0)days=365;
	else if(year % 4===0)days=366;
	else days=365;
	return days;
}