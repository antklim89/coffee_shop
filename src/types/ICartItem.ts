import { IGatsbyImage } from './IGatsbyImage';


export interface ICartItem {
    qty: number;
    id: string;
    createdAt: string;
    title: string;
    featuredImage: IGatsbyImage;
    variant: {
        id: string
        price: string;
        weight: number;
        weightUnit: string;
    }
}
