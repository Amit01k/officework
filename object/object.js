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
// let {Name,Kumar,Kushwaha}=amit   
// //we can destructure the object like below
// console.log(Kumar)

const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

  console.log(mouse[bird["name"]])
console.log("revert msg")