
<template>
    <div>
        <nuxt-link to="/about">go on about page</nuxt-link>
         <component-data />    <!--we can write file name here to this way to run -->
        Hello


        <h2 class="text-lg text-center">below this come from component two</h2>
        <component-two/>
    </div>
    <!-- <component-page/> -->
</template>

<!-- <script setup lang="ts">
// import componentPage from '../components/component.vue'

// definePageMeta({
//     components:{
//         componentPage
//     }
// });
</script> -->