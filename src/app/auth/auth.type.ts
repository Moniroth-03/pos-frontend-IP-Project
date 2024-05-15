export type initState = {
    Data: Tres;
    isLoading: boolean;
}

export type Tres = {
    status: boolean;
    message: string | null;
    data: {
        id: number | null;
        users_type: number | null;
        name: string | null;
        avatar: string | null;
        phone: string | null;
        email: string | null;
        email_verified_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        role: {
            id: number | null;
            name: string | null;
            created_at: Date | null;
            updated_at: Date | null;
        }
    }
    token: null | string;
} 
export type Tbody = {
    email: string;
    password: string;
}