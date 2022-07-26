<template>

    <div>
        <nuxt-link to="/">home</nuxt-link>
        <h2 class="text-center">this is a dynamic page {{$route.params.id}}</h2>
    </div>
</template>