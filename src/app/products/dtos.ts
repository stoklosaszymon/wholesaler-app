export interface ProductDto {
    id: string;
    name: string;
    price: number;
    amount: number;
    isAvailable: boolean;
    supplier_id: string;
}

export interface ProductRequestDto {
    name: string;
    price: number;
    amount: number;
    isAvailable: boolean;
    supplier_id: string;
}