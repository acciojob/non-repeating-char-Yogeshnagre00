
//your JS code here. If required.
let x=prompt('Enter a string');
for(let i=0;i<x.length;i++){
	if(x.charAt(i)==x.charAt(i+1)){
		alert(x.charAt(i-1));
	}
}