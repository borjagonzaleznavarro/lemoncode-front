import React from "react";
import { PictureInfoVM, PicturesListComponent } from "@/common";
import { AppBarComponent, CartContainer } from "@/pods";

interface Props {
  list: PictureInfoVM[];
  title: string;
  onCheckPicture: (event, checked) => void;
  cartVisible: boolean;
}

export const DogsListComponent: React.FC<Props> = (props) => {
  const { list, title, onCheckPicture, cartVisible } = props;
    
  return (
    <>
      <AppBarComponent />
      <section className="shop">
        <section className="list-holder">
          <PicturesListComponent
            list={list}
            title={title}
            onCheckPicture={onCheckPicture}
          />
        </section>
        {cartVisible && (
          <aside>
            <CartContainer />
          </aside>
        )}
      </section>
    </>
  );
};
