//regular expression is the sequcence of some character and it is used to match some combination in string.

a="amit"
reg=/ssfg/
console.log(a)
console.log(reg) //it show the complete value=>/amit/
console.log(reg.source) //its show only regex value =>amit
//exec()=>if the reg match than its return the index numbe of the value and if reg not match than its return null
let code="javascript is very good language"
let result =reg.exec(code)
console.log(result)