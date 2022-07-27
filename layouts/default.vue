<template>
  <div>
    <!-- <nuxt-link to="/about">go to about page</nuxt-link>
    <nuxt-link to="/">home</nuxt-link> -->
    <!-- <h2 class="text-red-800"><nav>this is come from layouts </nav></h2>
    <slot /> -->
    <!-- <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>      ul>li*3>a
        <li><a href=""></a></li>
    </ul>
     -->
     <ul>
        <!-- <li><nuxt-link to="/">home</nuxt-link></li> -->
        <li><nuxt-link to="/about">about page</nuxt-link></li>
        <li><nuxt-link to="/posts">post</nuxt-link></li>
     </ul>
     <slot/>

  </div>
</template>