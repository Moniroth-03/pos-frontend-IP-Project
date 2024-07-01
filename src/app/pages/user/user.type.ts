export type UserGet = {
    message: string | null;
    data: user[]
}

export type UserCreateReq = {
    code: string;
    type_id: number;
    unit_price: number;
    in_stock: number;
    image: Blob;
    name: string;
}

export type UserUpdateReq = {
    id: number;
    body: {   
        code: string;
        type_id: number;
        unit_price: number;
        name: string;
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
    loyalty_points: number;
    role: {
        id: number;
        name: string;
    }
}

export type initState = {
    isLoading: boolean;
    data: user[];
}