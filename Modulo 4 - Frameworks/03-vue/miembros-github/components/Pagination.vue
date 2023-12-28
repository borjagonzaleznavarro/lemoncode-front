<template>
    <div class="pagination">
        <v-btn @click="paginate('prev')" class="mt-2" prepend-icon="mdi-chevron-left" :disabled="!hasPrevPage">
            Previous
        </v-btn>
        <v-btn @click="paginate('next')" class="mt-2" append-icon="mdi-chevron-right" :disabled="!hasNextPage">
            Next
        </v-btn>
    </div>
</template>
  
<script setup>
const { hasPrevPage, hasNextPage, paginate } = defineProps(['hasPrevPage', 'hasNextPage', 'paginate']);
</script>
  
<style lang="scss" scoped>
.pagination {
    text-align: center;
    margin-bottom: 20px;
    display: flex;

    button {
        margin: 0 5px;
        flex: 1;
    }
}
</style>