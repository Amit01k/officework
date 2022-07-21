<template>
<div>
    <hr/>
<ol type="A">
    <li v-for="items of technology" :key="items">{{items}}</li>
</ol>
<br/>
<br/>
<ul>
    <li v-for="items of user" :key="items"> name:{{items.name}}  E-mai:id-{{items.email}}</li>
</ul>



</div>


</template>

<script>
export default{
    name:"for-loop",
    data(){
        return {
            technology: ['js','c','python','javaScript','ewge','rwthgrt'],
            user:[{name:"Amit", email:"amit@gmail.com"},
            {name:"Ankit", email:"ankit@gmail.com"},{name:"sonali", email:"sonali@gmail.com"},{name:"sonu", email:"sonu@gmail.com"}]
        }
    }
}


</script>