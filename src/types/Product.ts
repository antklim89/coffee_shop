import { IGatsbyImage } from './IGatsbyImage';
import { ProductVariant } from './ProductVariant';


export interface Product {
    id: string;
    description: string;
    createdAt: string;
    images: IGatsbyImage[];
    handle: string;
    isGiftCard: false;
    productType: string;
    tags: string[];
    title: string;
    totalInventory: number;
    totalVariants: number;
    variants: ProductVariant[];
    featuredImage: IGatsbyImage;
    hasOnlyDefaultVariant: true;
    hasOutOfStockVariants: false;
    status: string;
}
