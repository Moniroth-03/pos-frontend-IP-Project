
export interface OrderRes {
    message: string;
    data: Sale[] | null;
    total_count: number,
    last_page: number,
    current_page: number,
    per_page: number
}

export interface Sale {
        id: number;
        receipt_number: number;
        cashier_id: number;
        customer_id: number;
        total_price: number;
        ordered_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        cashier: {
            id: number;
            name: string;
            users_type: number;
            role: {
                id: number;
                name: string;
            }
        }
        details: {
            id: number;
            order_id: number;
            product_id: number;
            unit_price: number;
            qty: number;
            product: {
                id: number;
                name: string;
                type_id: number;
                type: {
                    id: number;
                    name: string;
                }
                image?: string
            }
        } []
    }
export interface initState {
    isLoading: boolean;
    data: OrderRes | null;
}