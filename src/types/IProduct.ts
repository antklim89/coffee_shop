import { IGatsbyImage } from './IGatsbyImage';
import { IProductVariant } from './IProductVariant';


export interface IProduct {
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
    variants: IProductVariant[];
    featuredImage: IGatsbyImage;
    hasOnlyDefaultVariant: true;
    hasOutOfStockVariants: false;
    status: string;
}
