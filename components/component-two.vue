<template>
<div>
    <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur error quos possimus, sunt at blanditiis accusamus dolorem iusto neque tempora?</h2>
        <p>{{firstName}}</p>
        <button @click="name()">click me</button>
    </div>
</div>


</template>


<script setup lang="ts">
 let firstName="amit"

function name(){
  let  firstName="kumar"
  console.log(firstName)

}


</script>