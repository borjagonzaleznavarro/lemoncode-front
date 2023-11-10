import React from 'react';
import { PictureInfo, PictureInfoVM } from '@/common';
import { mapPicturesToVM } from '@/common';
import { CartContext } from '@/core';
import { getDogsList } from './api';
import { DogsListComponent } from './dogs-list.component';

export const DogsListContainer: React.FunctionComponent = () => {
    const [dogsList, setDogsList] = React.useState<PictureInfoVM[]>([]);
    const cartContext = React.useContext(CartContext);

    const onLoadDogsList = () => {
        const apiDogsList: PictureInfo[] = getDogsList();
        const viewModelPictureList: PictureInfoVM[] = mapPicturesToVM(apiDogsList);
        viewModelPictureList.map(dog => cartContext.picturesCart.find(id => id === dog.id) ? dog.selected = true : dog.selected = false)
        setDogsList(viewModelPictureList);
    };

    const handleCheckDog = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        const idSelected = event.target.id;

        const picturesList = dogsList.map(dog => {
            dog.id === idSelected ? dog.selected = checked : dog.selected;
            return dog;
        });
        // console.log({ picturesList });
        setDogsList(picturesList);

        let idList = [...cartContext.picturesCart];
        if (checked) {
            idList = idList.find(el => el === idSelected) ? [...idList] : [...idList, idSelected];
        } else {
            idList = idList.filter(el => el !== idSelected);
        }
        // console.log({ idList });
        cartContext.setPicturesCart(idList);
    }

    React.useEffect(() => {
        onLoadDogsList();
    }, [cartContext.picturesCart]);

    return (
        <DogsListComponent
            list={dogsList}
            title="Dogs"
            onCheckPicture={handleCheckDog}
            cartVisible={cartContext.cartVisible}
        />
    );
}