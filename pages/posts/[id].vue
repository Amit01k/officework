<template>
    <div>
        <nuxt-link to="/">home</nuxt-link>
        <img src="../../public/WIN_20220726_09_38_59_Pro.jpg" alt="">
        <h2 class="text-center">this is a dynamic page {{$route.params.id}}</h2>
    </div>
</template>