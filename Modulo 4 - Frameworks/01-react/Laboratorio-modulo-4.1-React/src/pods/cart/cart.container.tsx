import React from 'react';
import { PictureInfo } from '@/common';
import { CartContext } from '@/core';
import { getCatsList, getDogsList } from '@/pods';
import { CartComponent } from './cart.component';

export const CartContainer: React.FC = () => {
    const cartContext = React.useContext(CartContext);
    const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

    const getDetails = () => {
        const pictures: PictureInfo[] = [...getCatsList(), ...getDogsList()];
        const cart: PictureInfo[] = cartContext.picturesCart.map(el => pictures.find(pic => pic.id === el))
        setCartList(cart);
    }

    const onDeleteItem = (event: React.FormEvent<HTMLButtonElement>) => {
        const cart = cartContext.picturesCart.filter(el => el !== event.currentTarget.id.slice(5));
        cartContext.setPicturesCart(cart);
    }

    const onDeleteAll = (event: React.FormEvent<HTMLButtonElement>) => {
        cartContext.setPicturesCart([]);
    }

    React.useEffect(() => {
        getDetails();
    }, [cartContext.picturesCart]);

    return (
        <>
            <CartComponent
                cartList={cartList}
                contextCart={cartContext.picturesCart}
                onDeleteAll={onDeleteAll}
                onDeleteItem={onDeleteItem}
            />
        </>
    );
};