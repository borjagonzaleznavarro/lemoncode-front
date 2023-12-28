import type { MembersApiResponse } from "~~/types";

export const memberDetailService = {
  async getMemberById(id: string) {
    const response = await $fetch<MembersApiResponse>(
      `https://api.github.com/user/${id}`
    );
    return response;
  },
};