export type InventoryGet = {
    message: string | null;
    data: inventory[]
}

export type InventoryCreateReq = {
    code: string;
    type_id: number;
    unit_price: number;
    in_stock: number;
    image: Blob;
    name: string;
}

export type InventoryUpdateReq = {
    id: number;
    body: {   
        code: string;
        type_id: number;
        unit_price: number;
        name: string;
    }
}

export type InventoryMessage = {
    message: string;
}

export type inventory = {
    id: number;
    type_id: number;
    code: string;
    name: string;
    image: string;
    unit_price: number;
    discount: string | number;
    created_at: Date;
    updated_at: Date;
    type: {
        id: number;
        name: string;
    }
}

export type initState = {
    isLoading: boolean;
    message: string | null;
    data: inventory[];
}