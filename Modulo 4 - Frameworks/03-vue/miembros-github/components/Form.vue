<template>
    <v-container>
        <v-form @submit.prevent @submit="loadMembers">
            <v-row>
                <v-col>
                    <v-sheet>
                        <v-text-field label="Organization" id="organization" v-model="organizationStore.organization"
                            :rules="[(v: any) => !!v || 'Item is required']"></v-text-field>
                    </v-sheet>
                </v-col>
                <v-col cols="4">
                    <v-sheet>
                        <v-btn type="submit" size="x-large" block prepend-icon="mdi-magnify">Load
                            members</v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
    <!-- sdas{{ members[0] }} -->
    <div class="container">
        <div>
            <pre v-if="fetchError" class="error">Error: No se encuentra la organización</pre>
            <div v-if="!fetchError && organizationStore.organization != ''">
                <MembersList :members="members" />
                <Pagination :organizationStore.page="organizationStore.page" :hasPrevPage="hasPrevPage"
                    :hasNextPage="hasNextPage" :paginate="paginate" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useOrganizationStore } from "~/stores";
import { organizationService } from '~~/services/organization'

const organizationStore = useOrganizationStore();
let members = ref([]);
let fetchError = ref(false);
const itemsPerPage = 5;
let hasPrevPage = ref(false);
let hasNextPage = ref(false);

onMounted(() => {
    fetchMembers();
});


async function fetchMembers() {
    let response = await organizationService.getOrganizationMembers(organizationStore.organization, organizationStore.page, itemsPerPage)
    hasPrevPage.value = response.hasPrevPage;
    hasNextPage.value = response.hasNextPage;
    members.value = response.data.value as never[];
    fetchError.value = response.fetchError;
}

// hasPrevPage = false;
// hasNextPage = true;
// fetchError = false;
// }

// async function fetchMembers() {
//     fetchError.value = false;

//     const { data, error } = await useFetch(`https://api.github.com/orgs/${organization.value}/members?page=${organizationStore.page}&per_page=${itemsPerPage}`, {
//         onResponse({ response }) {
//             const linkHeader = response.headers.get('link');

//             hasPrevPage = linkHeader && linkHeader.includes(`rel="prev"`);
//             hasNextPage = linkHeader && linkHeader.includes(`rel=\"next\"`);
//         },
//     });
//     if (error.value) {
//         fetchError.value = true;
//         members.value = [];
//     } else {
//         members.value = data.value || [];
//     }
//     console.log(members.value);
// }

function paginate(direction: string) {
    organizationStore.page = direction === 'prev' ? organizationStore.page - 1 : organizationStore.page + 1;
    fetchMembers();
}

function loadMembers() {
    organizationStore.page = 1;
    fetchMembers();
}
</script>

<style lang="scss" scoped>
.error {
    text-align: center;
}

.container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.pagination {
    text-align: center;
    margin-bottom: 20px;

    button {
        margin: 0 5px;
    }
}
</style>