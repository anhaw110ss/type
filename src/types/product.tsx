export interface IProduct {
    id: number,
    name: string,
    price: number,
    image: string,
    description: string,
    category: string
}
export interface IProdu{
    products: IProduct[],
    onRemove: (id: number) => void
}