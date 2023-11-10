import { mockCatsList } from './cats-list.mock-data';
import { PictureInfo } from '@/common';

let catsList: PictureInfo[] = [...mockCatsList];

export const getCatsList = () => {
    return catsList;
};