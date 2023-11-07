import React from 'react';
import { PictureInfo, PictureInfoVM } from '@/common';
import { mapPicturesToVM } from '@/common';
import { CartContext } from '@/core';
import { getCatsList } from './api';
import { CatsListComponent } from './cats-list.component';

export const CatsListContainer: React.FC = () => {
    const [catsList, setCatsList] = React.useState<PictureInfoVM[]>([]);
    const cartContext = React.useContext(CartContext);

    const onLoadCatsList = () => {
        const apiCatsList: PictureInfo[] = getCatsList();
        const viewModelCatsList: PictureInfoVM[] = mapPicturesToVM(apiCatsList);
        viewModelCatsList.map(cat => cartContext.picturesCart.find(id => id === cat.id) ? cat.selected = true : cat.selected = false)
        setCatsList(viewModelCatsList);
    };

    const handleCheckCat = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const idSelected = event.target.id;

        const picturesList = catsList.map(cat => {
            if (cat.id === idSelected) !cat.selected;
            return cat;
        });
        setCatsList(picturesList);

        let idList = [...cartContext.picturesCart];
        if (checked) {
            idList = idList.find(el => el === idSelected) ? [...idList] : [...idList, idSelected];
        } else {
            idList = idList.filter(el => el !== idSelected);
        }
        cartContext.setPicturesCart(idList);
    }

    React.useEffect(() => {
        onLoadCatsList();
    }, [cartContext.picturesCart]);

    return (
        <CatsListComponent
            list={catsList}
            title="Cats"
            onCheckPicture={handleCheckCat}
            cartVisible={cartContext.cartVisible}
        />
    );
}