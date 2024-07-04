export type UserGet = {
    message: string | null;
    data: user[]
}

export type UserCreateReq = {
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
    users_type: number | string;
}

export type UserCreateRes = {
    message: string;
    data: user;
    
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export type UserUpdateReq = {
    id: number;
    body: {   
        name: string;
        email: string;
        phone: string;
        users_type: number;
        is_active: number;
        avatar?: string;
    }
}

export type UserMessage = {
    message: string;
}

export type user = {
    id: number;
    name: string;
    email: string;
    users_type: number;
    avatar: string;
    phone: string;
    is_active?: boolean;
    loyalty_points: number;
    role: {
        id: number;
        name: string;
    }
    created_at: Date;
    updated_at: Date;
}

export type initState = {
    isLoading: boolean;
    data: user[];
}