import { ICartItem } from '~/types';


const CART_STORAGE_NAME = 'coffee_shop_cart';
const isBrowser = typeof window !== 'undefined';


export function getCartFromStorage(): ICartItem[] {
    if (!isBrowser) return [];
    const cartString = localStorage.getItem(CART_STORAGE_NAME);
    if (!cartString) return [];

    try {
        const cart = JSON.parse(cartString);
        if (validateCart(cart)) return cart;
        return [];
    } catch (error) {
        localStorage.removeItem(CART_STORAGE_NAME);
        return [];
    }
}

export function setCartToStorage(cart: ICartItem[]): void {
    if (!isBrowser) return;

    localStorage.setItem(CART_STORAGE_NAME, JSON.stringify(cart));
}

function validateCart(cart: ICartItem[]): boolean {
    return cart
        .map((i) => 'id' in i)
        .every((item) => item);
}
