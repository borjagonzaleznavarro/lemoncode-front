<template>
    <section class="wrapper">
        <div class="flex align-items-center justify-content-between">
            <h1>Products</h1>
            total: {{ totalProducts }}
        </div>

        <hr>
        <input type="text" v-model="textFilter">
        <hr>
        <ul class="product-list">
            <li v-for="product in filteredList" :key="product.id">
                <NuxtLink :to="`/product/${product.id}`">
                    <ProductListItem :product="product" />
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>
  
<script setup lang="ts">
// List of products
const { list } = await useProductsApi()

// Filter
const textFilter = ref('')

const filteredList = computed(() => {
    return list.filter((product) => {
        return product.title.toLowerCase().includes(textFilter.value.toLowerCase())
    })
})

const totalProducts = computed(() => {
    return filteredList.value.length
})
</script>
  
<style lang="scss" scoped>
.product-list {
    padding: 0;

    li {
        margin-bottom: 2em;
    }
}
</style>