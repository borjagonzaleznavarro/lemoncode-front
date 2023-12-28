<template>
    <div class="pa-3">
        <NuxtLink to="/">
            <v-btn icon>
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
        </NuxtLink>
    </div>
    <div class="d-flex align-center flex-column" v-if="member">
        <v-card class="mx-auto" width="320">
            <v-img :src="member.avatar_url" height="200px" cover></v-img>
            <v-card-title>{{ member.name }}</v-card-title>
            <v-card-subtitle>@{{ member.login }}</v-card-subtitle>
            <v-card-text>{{ member.bio }}</v-card-text>
        </v-card>
    </div>
</template>
  
<script setup lang="ts">
import { memberDetailService } from '~~/services/members'
import type { Member } from '~~/types'

const route = useRoute()
const id = route.params.id as string

const { data: member } = useAsyncData<Member>(() =>
    memberDetailService.getMemberById(id)
)
</script>
  
<style scoped></style>