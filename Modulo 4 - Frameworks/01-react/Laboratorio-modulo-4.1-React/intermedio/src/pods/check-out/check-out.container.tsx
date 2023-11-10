import React from 'react';
import { CartContext } from '@/core';
import { PictureInfo } from '@/common';
import { getCatsList, getDogsList } from '@/pods';
import { CheckOutComponent } from './check-out.component';

export const CheckOutContainer: React.FC = () => {
    const cartContext = React.useContext(CartContext);
    const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

    const getDetails = () => {
        const pictures: PictureInfo[] = [...getCatsList(), ...getDogsList()];
        const cart: PictureInfo[] = cartContext.picturesCart.map(el => pictures.find(pic => pic.id === el))
        setCartList(cart);
    }

    React.useEffect(() => {
        getDetails();
    }, [cartContext.picturesCart]);

    return (
        <CheckOutComponent
            cartList={cartList}
        />
    );
};