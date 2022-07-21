<template>

<div>
    <hr/>
    <h2>this is come from child component</h2>
 <h1> reverse a string :>{{msg.split(" ").reverse().join("")}}</h1>
 <h1>{{msg}}</h1>
<h2>this is name of the user{{user.name}} this is email id of the user{{user.email}}</h2>
<button v-on:click="gateName()">called parent fucntion</button>
<!-- <p>{{gateName}}</p> -->
</div>

</template>

<script>


export default{
    name:'child-page',
    props:{
        msg:String,
        user:Object,
        gateName:Function   //this  is not working properly
    }
}


</script>

<style scoped>
h2{
    color: pink;
    text-align: center;
}


</style>