import { PictureInfo } from '@/common';
import { mockDogsList } from './dogs-list.mock-data';

let dogsList: PictureInfo[] = [...mockDogsList];

export const getDogsList = () => {
    return dogsList;
};