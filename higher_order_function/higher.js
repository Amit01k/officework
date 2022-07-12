function x(){       //here x is callback function
    console.log("hiii")
}
function y(x){           //here y is the higher order function
    x()
}

//calculate the area of cir.

//normal code


// radius=[1,2,3,5]
// const calculateArea=function(radius){
//     let output=[]
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i])
//     }
//     return output
// }

// console.log(calculateArea(radius))

