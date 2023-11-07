export interface Member {
  id: number;
  login: string;
  name: string;
  company: string;
  bio: string;
  avatar_url: string;
}

export const createDefaultMemberDetail = (): Member => ({
  id: 0,
  login: "",
  name: "",
  company: "",
  bio: "",
  avatar_url: "",
});
