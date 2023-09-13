import { createContext, useState, ReactNode } from "react";

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({
  cart: undefined,
  addToCart: () => {},
});

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IProducts[]>();

  const addToCart = (item: IProducts) => {
    const newCart = {...cart, item}
    setCart(newCart)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>{children}</CartContext.Provider>
  );
};
