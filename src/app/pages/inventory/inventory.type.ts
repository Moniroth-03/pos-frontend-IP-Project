

export type InventoryGet = {
    message: string | null;
    data: inventory[]
    
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export type InventoryCreateReq = {
    code: string;
    type_id: number | string;
    unit_price: number;
    in_stock: number;
    image: Blob | string;
    name: string;
}

export type InventoryCreateRes  = InventoryMessage & {
    data: inventory;
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
    status?: string;
    message: string;
}

export type inventory = {
    id: number;
    type_id: number | string;
    code: string;
    name: string;
    image: string;
    unit_price: number;
    in_stock?: number;
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
    data: InventoryGet | null;
}