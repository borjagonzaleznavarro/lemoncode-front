<template>
    <article class="grid product-container card" :class="{
        'product-container--has-discount': hasDiscount,
    }">
        <div class="image">
            <img :src="product.images[0]" alt="" loading="lazy" />
        </div>
        <div class="product-container__content">
            <h2>
                {{ product.title }}
            </h2>
            <p>
                <span class="grey-text">Description: </span>
                <strong>{{ product.description }}</strong>
            </p>
            <p>
                <span class="grey-text">Brand: </span>
                {{ product.brand }}
            </p>
            <p>
                <span class="grey-text">Category: </span>{{ product.category }}
            </p>
        </div>
        <div class="flex product-container__aside">
            <div class="text-align-end aside__price">
                <StaticPrice :quantity="product.price" coin="EUR" />
            </div>
            <AddToCartButton @add-item="onAddItem" :product="product" />
        </div>
    </article>
</template>

<script setup lang="ts">
import type { Product } from '@/types';

interface Props {
    product: Product
}

const props = defineProps<Props>()

const hasDiscount = computed(() => {
    return props.product.discountPercentage > 15
})

// Cart
const { addToCart } = useCartStore()

const onAddItem = (product: Product) => {
    addToCart(product)
}
</script>

<style lang="scss">
.product-container {
    align-items: flex-start;
    grid-template-columns: 210px 1fr 100px;
}

.product-container--has-discount {
    background-color: rgba(yellow, 0.5);
}

.product-container__content {
    padding: 0 1em;
}

.product-container__aside {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.image {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
    }
}
</style>