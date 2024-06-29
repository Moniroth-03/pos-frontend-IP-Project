export type initState = {
    products: {
        data: Product[] | null;
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

export type GetProductByType = {
    message: string;
    data: Product[];
}

export type Cart = {
    product: Product,
    qty: number;  
}[];