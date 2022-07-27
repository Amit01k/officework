<template>
<div>
    <div class=" m-5">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur error quos possimus, sunt at blanditiis accusamus dolorem iusto neque tempora?</h2>
        <p>{{firstName}}</p>
        <button @click="name()">click me</button>
        <br/>
        <button @click="al()" class="bg-red-600 text-white rounded-md p-1">this is alert button </button>
    </div>
</div>


</template>


<script setup lang="ts">
 let firstName="amit"

function name(){
  let  firstName="kumar"
  console.log(firstName)

}

function al(){
    alert("this is alert come from alert button")
}


</script>