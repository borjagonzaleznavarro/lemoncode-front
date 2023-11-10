import parse from "parse-link-header";

const url = `https://api.github.com/orgs/`;

export const getMembersAPI = (organizationName: string) => async (page: number) => {
    return fetch(`${url}${organizationName}/members?page=${page}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((json) => json);
};

export const getLastPageAPI = async (organizationName: string) => {
  const response = await fetch(`${url}${organizationName}/members`);
  const headers = parse(response.headers.get("Link"));
  return headers !== null ? headers.last.page : 1;
};
