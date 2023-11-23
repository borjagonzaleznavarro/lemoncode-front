import { Injectable } from "@angular/core";
import { ApiPictureEntity } from '../../api/api.model';
import { apiPictureList } from '../../api/api.mock';

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  pictureGalleryList: ApiPictureEntity[];

  constructor() {}

  getApiPictureListPromise(): Promise<ApiPictureEntity[]> {
    return Promise.resolve(apiPictureList);
  }
}
