arr1=[2,3,4,5,6,4,5,5,6,6,6,6,6,6]
arr2=[5,6,3,2,1]
arr3=[6,5,4,3,4]
//console.log(arr1.concat(arr2,arr3))
// console.log(set((...arr1,...arr2)))

val=arr1.keys()
for(let ele of val){
    console.log(ele)
}
console.log("below value ")
val2=arr1.values()
for(let ele of val2){
    console.log(ele)
}



console.log(arr1.concat("amit"))//we can concate a string in array like this