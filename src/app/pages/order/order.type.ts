export type Product = {
    name: string;
}
export type ListProduct = {
    data: Product [];
    pagination: {
        current_page: number;
        total_items: number;
        total_pages: number;
    }
}

export type Category = {
    id: number;
    name: string;
    color: string;
}

export type CategoryList = {
    data: Category [];
}