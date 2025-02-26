import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface CourseCartItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CourseCartContextType {
  cart: CourseCartItem[];
  addToCart: (item: CourseCartItem) => void;
  removeFromCart: (itemId: number) => void;
  totalCartPrice: number;
}

const CourseCartContext = createContext<CourseCartContextType | undefined>(
  undefined
);

export const CourseCartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CourseCartItem[]>([]);

  const addToCart = (newItem: CourseCartItem) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.id === newItem.id)) {
        return prevCart;
      }
      console.log('Adding to cart:', newItem);
      return [...prevCart, { ...newItem }];
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== itemId);
    });
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // Calculate Total Price
  const totalCartPrice = cart.reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  return (
    <CourseCartContext.Provider
      value={{ cart, addToCart, totalCartPrice, removeFromCart }}
    >
      {children}
    </CourseCartContext.Provider>
  );
};

export const useCourserCart = () => {
  const context = useContext(CourseCartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
