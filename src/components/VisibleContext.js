// components/VisibleContext.js
import { createContext, useContext, useState } from 'react';

const VisibleContext = createContext();

export function VisibleProvider({ children }) {
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <VisibleContext.Provider
      value={{ visible, setVisible, isOpen, toggleMenu }}
    >
      {children}
    </VisibleContext.Provider>
  );
}

export function useVisibleContext() {
  return useContext(VisibleContext);
}
