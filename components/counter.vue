<template>
<div class="bg-orange-700 w-48 flex">
    <h2>this is counter page</h2>
    <h2>one incremented{{incOne}}</h2>
    <h1>count{{count}}</h1>
    
    <button @click="increment" class="bg-green-500">increment</button>
    <button @click="decrement" class="bg-red-500">decreament</button>


    






</div>




</template>

<script setup>
const count=ref(0)
// let nextCounter=count++
function increment(){
    count.value++

}

function decrement(){
    count.value--
}
const incOne=computed(()=>count.value+1);
</script>