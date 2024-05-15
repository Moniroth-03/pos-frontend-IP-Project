export type initState = {
    products: {
        data: ProductList | null;
        isLoading: boolean;
    };
    categories: {
        data: CategoryList | null;
        isLoading: boolean;
    }
}

export type Product = {
    name: string;
}

export type Category = {
    id: number;
    name: string;
    color: string;
}

export type CategoryList = {
    data: Category [];
}
export type ProductList = {
    data: Product [];
    pagination: {
        current_page: number;
        total_items: number;
        total_pages: number;
    }
}