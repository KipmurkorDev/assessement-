// Given a string S of length N, write a JavaScript function that transforms the string by reversing characters in groups of four and returns the transformed string. 

let str="Lorem at";

function strReverse(){
let reverseString=""
while(str.length !=""){

 reverseString+= str.split('').slice(0,4).reverse().join('');

//  reasigning the stri to the part that was not sliced and loop again
    str=str.slice(4)

}

return reverseString


}
console.log(strReverse());




