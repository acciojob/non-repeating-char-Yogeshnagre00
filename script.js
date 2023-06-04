//your JS code here. If required.

function nonRepeating(str){
	const char={};
	//count frequency
	for(let i=;i<str.length;i++){
		const c=str[i];
		char[c]=char[c]?char[c]+1:1;
	}

	for(let i=0;i<str.length;i++){
		const chara=str[i];
		if(char[chara] === 1){
			return chara;
		}
	}
	return null;
}
const input=prompt("Enter a string");
const firstnonrepeat=nonRepeating(input);

if(firstnonrepeat){
	alert ("$[firstnonrepeat]");
}
else{
	alert("there is no repeated character");
}