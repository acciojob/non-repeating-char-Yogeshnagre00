//your JS code here. If required.
//var value= prompt();
var value= prompt();
function SingleValue(){
        var charObj={};
        for(let i=0;i<value.length;i++){
                var curchar=value[i];
                if(charObj[curchar]==undefined)
                        charObj[curchar]=0;
                // else
                        charObj[curchar]++;
        }
        for (const key in charObj) {
               
                if (charObj[key]==1) {
                        return key;
                        
                }
                
        }
        return null;

}
window.alert(SingleValue())