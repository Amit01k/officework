let amit={
    Name:"Amit",
    Kumar:"naskdnfisdn",
    Kushwaha:"Kushwaha",
    name(){
        console.log(this.Name+" "+this.Kushwaha)

    }
}
// amit.name()

// console.log(amit.Kumar)
// //destructuring in object
// //we can destructure the object like below
// let {Name,Kumar,Kushwaha}=amit   
// console.log(Kumar)

const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

  // console.log(mouse[bird["name"]])


  const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log("in",item);   //its give index value
}

for (let item of myLifeSummedUp) {
  console.log("of",item);  //it is giving value
}
console.log("below for in loop on array of object*********************************************")

arr=[{a:"sdnd",b:"sdfgjdf",c:"sdfgdf",d:"sdfjngfd"},{a:"sdnd",b:"sdfgjdf",c:"sdfgdf",d:"sdfjngfd"},{a:"sdnd",b:"sdfgjdf",c:"sdfgdf",d:"sdfjngfd"}]

for(let item of arr){
  console.log(item)
}


amit={
  name:"dsfagdsfg",
  a:"dfnsgndf",
  b:"sdnfgnidf"
}

for (let item in amit) {
  console.log(item);   //its give index value
}