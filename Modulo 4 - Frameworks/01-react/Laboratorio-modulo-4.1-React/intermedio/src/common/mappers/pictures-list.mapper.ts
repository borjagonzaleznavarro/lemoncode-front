import { PictureInfo } from '@/common';

export const mapPicturesToVM = (picturesList: PictureInfo[]) => {
    return picturesList.map(picture => mapPictureToVM(picture));
}

const mapPictureToVM = (picture: PictureInfo) => {
    return {
        ...picture,
        selected: false
    };
}