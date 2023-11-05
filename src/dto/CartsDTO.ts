
export interface CartsDTO {
    id: number;
    userId: number;
    date: string;
    products: ProductDescription[];
}

interface ProductDescription{
    id: number;
    productId: number;
    quantity: number;
}
