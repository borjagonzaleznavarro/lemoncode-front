<template>
    <v-card class="mb-3">
        <v-list v-for="member in members" :key="member.id">
            <v-list-item :prepend-avatar="member.avatar_url" :title="member.login" Link :to="`/member/${member.id}`">
            </v-list-item>
        </v-list>
    </v-card>
</template>
  
<script setup>
const props = defineProps(['members'])
</script>