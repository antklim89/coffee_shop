import { Dispatch, SetStateAction } from 'react';

import { ICartItem } from '~/types';


export interface CartContext {
    cart: ICartItem[]
    setCart: Dispatch<SetStateAction<ICartItem[]>>
    addToCart: (arg: ICartItem) => void
    removeFromCart: (arg: ICartItem) => void
    updateCartItem: (arg: ICartItem) => void
}

