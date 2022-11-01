//  Given an array of integers, find the sum of its elements. 
 
//  For example, if the array, [1,2,4,7], so return 14. 

let arr=[1,2,4,7]

function sumUp(){

let sum=arr.reduce((accum, num)=>{
return accum+=num

},
)
return sum

}
// console.log(sumUp());