
<template>
    <div>
        <nuxt-link to="/posts" class="text-2xl text-right text-green-600">go on post page (here custom page available)</nuxt-link>
        <br/>
        <nuxt-link to="/about">go on about page</nuxt-link>
         <component-data />    <!--we can write file name here to this way to run -->
        Hello


        <h2 class="text-lg text-center">below this come from component two</h2>
        <component-two/>

        <counter/>



        <!-- <img src="../public/WIN_20220726_09_38_59_Pro.jpg" alt="this image from public folder">
        <img src="WIN_20220726_09_38_59_Pro.jpg" alt=""> -->

        
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


<!-- <script setup>
// You might choose this based on an API call or logged-in status
definePageMeta({
    layout:"custom",
});
</script> -->