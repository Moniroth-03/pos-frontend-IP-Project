export type initState = {
    products: {
        data: null | GetAllProduct;
        isLoading: boolean;
    };
    categories: {
        data: Category[] | null;
        isLoading: boolean;
    };
    carts: Cart | null
}

export type Product = {
    id: number;
    type_id: number;
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

export type Category = {
    id: number;
    name: string;
    icon: string;
    created_at: Date;
    updated_at: Date;
    amount: number;
}

export interface PostCategoryRes {
    status: string;
    message: string;
    data: {
        name: string;
        updated_at: Date;
        created_at: Date;
        id: number;
    }
}

export interface GetAllProduct {
    message: string;
    data: Product[]
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
} 


export type Cart = {
    product: Product,
    qty: number;  
}[];

export interface OrderReq {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cart: any;
    customer_id: number;
}

