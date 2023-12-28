export interface Member {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
}

export interface MembersApiResponse {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    response: Response;
}