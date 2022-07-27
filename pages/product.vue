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
<!--<router-link :to="{ name: 'ProductCreate'}" class="btn">Add Product</router-link>-->
  <table>
    <thead>
      <tr>
        <th>#id</th>
        <th>Title</th>
        <th>Image</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{product.id}}</td>
        <td>{{product.title}}</td>
        <td><img :src="product.image" :alt="product.title" width="90" /></td>
        <td>
          <!-- <Nuxt-link :to="{ name: 'ProductEdit', params: { id: product.id }}" class="btn">Edit</Nuxt-link> -->
          <button @click="del(product.id)" class="btn btn-del">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
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