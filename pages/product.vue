<!-- <template>
<div>
    <nuxt-link to="/">home</nuxt-link>
    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis soluta dolorem cupiditate placeat vel eligendi labore aperiam, obcaecati hic laudantium officia earum reiciendis numquam sint voluptates nihil facere dignissimos ducimus nesciunt! Sequi, quis! Obcaecati veniam illo quasi earum laboriosam incidunt.
    </h5>
</div>

</template>


<script setup>
import { ref } from "vue";
import { onMounted } from ".vite/deps/vue";

definePageMeta({
    layout:"sidebar"
})

const product=ref([])

onMounted(async()=>{
    const res=await fetch("http://localhost:3000/products")
    product.value=await res.json()
})

return {product}

</script> -->



<template>
<div>
    <!-- <nuxt-link to="createPage" class="text-green-500 bg-red-600">create_product</nuxt-link> -->
<!--<router-link :to="{ name: 'ProductCreate'}" class="btn">Add Product</router-link>-->
  <table class="border-separate border border-slate-400 ...">
    <thead >
      <tr>
        <th class="border border-slate-300 ... text-center">Sr No. </th>
        <th class="border border-slate-300 ...">Title</th>
        <th class="border border-slate-300 ...">Image</th>
        <th class="border border-slate-300 ...">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td class="border border-slate-300 ...">{{product.id}}</td>
        <td class="border border-slate-300 ...">{{product.title}}</td>
        <td class="border border-slate-300 ..."><img :src="product.image" :alt="product.title" width="90" /></td>
        <td>
           <router-link :to="{ name: 'ProductEdit', params: { id: product.id }}" class="btn">Edit</router-link> 
          <button @click="del(product.id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <nuxt-link to="createPage" class="bg-sky-600 hover:bg-sky-700 ... m-10 mt-10 rounded-md w-24">create_product</nuxt-link>
</div>
</template>

<script >
import {onMounted, ref} from 'vue';
export default {
  name: 'Products',
  setup() {
    const products = ref([]);
    onMounted( async () => {
      const res = await fetch('http://localhost:3000/products');
      products.value = await res.json();
    })
    const del = async (id) => {
      await fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
      })
      products.value = products.value.filter(p => p.id !== id);
    }
    return { products, del }
  }
}
</script>