export const useOrganizationStore = defineStore(
  "organization",
  () => {
    const organization = ref("lemoncode");
    const page = ref(1);
    return { organization, page };
  },
  {
    persist: {
      storage: persistedState.localStorage,
    },
  }
);