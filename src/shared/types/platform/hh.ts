export interface HHAccessToken {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
}

export interface HHVacancy {
    id: string;
    name: string;
    area: {
        id: string;
        name: string;
    };
    salary?: {
        from?: number;
        to?: number;
        currency?: string;
    };
    employer: {
        id: string;
        name: string;
    };
    url: string;
}
