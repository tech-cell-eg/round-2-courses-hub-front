import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  totalItemPrice: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  totalCartPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add to Cart
  const addToCart = (newItem: CartItem) => {
    console.log("Adding to cart:", newItem);
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === newItem.id
            ? {
              ...item,
              quantity: item.quantity + 1,
              totalItemPrice: (item.quantity + 1) * item.price
            }
            : item
        );
      }

      return [...prevCart, { ...newItem, quantity: 1, totalItemPrice: newItem.price }];
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Increase Quantity
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
            ...item,
            quantity: item.quantity + 1,
            totalItemPrice: (item.quantity + 1) * item.price
          }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
              ...item,
              quantity: item.quantity - 1,
              totalItemPrice: (item.quantity - 1) * item.price
            }
            : item
        )
        .filter((item) => item.quantity > 0)
      // Remove item if quantity reaches 0
    );
  };

  // Calculate Total Price
  const totalCartPrice = cart.reduce((total, item) => {
    return total + (item.totalItemPrice || 0);
  }, 0);


  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, totalCartPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
