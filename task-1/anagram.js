var s1 = "bleat"
var s2 = "table"

function anagram (s1, s2){

 if(!s1 || !s2 || s1.length !== s2.length){return false;}

 var rS1 = s1.split('').sort().join('');
 var rS2 = s2.split('').sort().join('');
 
 console.log(rS1+" "+rS2);
 
 return rS1 === rS2;
}

var result = anagram(s1, s2);

console.log(result);