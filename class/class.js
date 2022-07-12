class employee{
    constructor(givenName,givenprofile,givenposition,givenMonth){
        this.Name=givenName
        this.profile=givenprofile
        this.position=givenposition
        this.month=givenMonth
    }
    fun(){
        return `this is my name ${this.Name}`
    }
    joingYear(){
        return "good"+" "+this.profile
    }
    Month(){
        return `this is month ${this.month}`
    }
}

amit=new employee("amit","ENGINEER","SDE","july")
//console.log(amit)
console.log(amit.fun())
console.log(amit.joingYear())
console.log(amit.Month())
