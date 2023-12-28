export const organizationService = {
  async getOrganizationMembers(
    organization: string,
    page: number,
    per_page: number
  ) {
    let hasPrevPage: boolean = false;
    let hasNextPage: boolean = false;
    let fetchError: boolean = false;

    const { data, error } = await useFetch(
      `https://api.github.com/orgs/${organization}/members?page=${page}&per_page=${per_page}`,
      {
        onResponse({ response }) {
          const linkHeader = response.headers.get("link");

          hasPrevPage =
            linkHeader !== null && linkHeader.includes(`rel="prev"`);
          hasNextPage =
            linkHeader !== null && linkHeader.includes(`rel="next"`);
        },
      }
    );
    if (error.value) {
      fetchError = true;
      data.value = [];
    }

    return { data, hasPrevPage, hasNextPage, fetchError };
  },
};
