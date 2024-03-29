import { Component, OnInit } from "@angular/core";
import { ApiPictureEntity } from "../../../api/api.model";
import { GalleryService } from "../../services/gallery.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
})
export class GalleryComponent {
  pictureList: ApiPictureEntity[];
  currentPicture: ApiPictureEntity;
  currentScale: number;
  isPlayingGallery: boolean;
  intervalActivated: any;
  fistPaginationItem: number;
  lastPaginationItem: number;

  constructor(public galleryService: GalleryService) {
    this.galleryService.getApiPictureListPromise().then((list) => {
      this.pictureList = list;
      this.currentPicture = list[0];
      this.currentScale = 1;
      this.isPlayingGallery = false;
      this.fistPaginationItem = 0;
      this.lastPaginationItem = 3;
    });
  }

  setPictureListPagination(action: string = "none"): void {
    if (action === "sum" && this.lastPaginationItem < this.pictureList.length) {
      this.fistPaginationItem += 3;
      this.lastPaginationItem += 3;
    } else if (action === "rest" && this.fistPaginationItem > 0) {
      this.fistPaginationItem -= 3;
      this.lastPaginationItem -= 3;
    }
  }

  handleZoomIn(): void {
    this.currentScale = this.currentScale + 1;
  }

  handleZoomOut(): void {
    this.currentScale = this.currentScale - 1;
  }

  handleNextPic(): void {
    if (this.checkIfLastIndex()) {
      this.setCurrentPicture(this.pictureList[0]);
    } else {
      const index =
        this.pictureList.findIndex((el) => el.id === this.currentPicture.id) +
        1;
      this.setCurrentPicture(this.pictureList[index]);
    }
  }

  handlePreviousPic(): void {
    const index =
      this.pictureList.findIndex((el) => el.id === this.currentPicture.id) - 1;
    this.setCurrentPicture(this.pictureList[index]);
  }

  handlePlayGallery(): void {
    if (!this.isPlayingGallery) {
      this.isPlayingGallery = true;
      this.intervalActivated = setInterval(() => {
        this.handleNextPic();
      }, 2000);
    } else {
      this.isPlayingGallery = false;
      clearInterval(this.intervalActivated);
    }
  }

  setCurrentPicture(pic: ApiPictureEntity): void {
    this.currentScale = 1;
    this.currentPicture = pic;
  }

  checkIfLastIndex(): boolean {
    return (
      this.currentPicture.id ===
      this.pictureList[this.pictureList.length - 1].id
    );
  }
}
