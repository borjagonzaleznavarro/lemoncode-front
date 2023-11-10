import React from "react";

interface CartContext {
  picturesCart: string[];
  setPicturesCart: (pictureId: string[]) => void;
  cartVisible: boolean;
  setCartVisible: (state: boolean) => void;
}

export const CartContext = React.createContext<CartContext>({
  picturesCart: [],
  setPicturesCart: (value) => {},
  cartVisible: true,
  setCartVisible: (value) => {},
});

export const CartContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  const [picturesCart, setPicturesCart] = React.useState<string[]>([]);
  const [cartVisible, setCartVisible] = React.useState<boolean>(true);

  return (
    <CartContext.Provider
      value={{
        picturesCart,
        setPicturesCart,
        cartVisible,
        setCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
