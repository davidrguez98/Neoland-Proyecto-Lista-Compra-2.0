export interface IProduct {
    img: string,
    name: string,
    description?: string,
    stock: {250: number, 500: number, 1000: number},
    price: {250: number, 500: number, 1000: number},
}