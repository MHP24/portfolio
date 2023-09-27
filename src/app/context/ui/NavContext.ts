'use client';
import { createContext } from 'react';

type TNavContext = {
  isOpen: boolean,
  toggleMenu: () => void
}

export const NavContext = createContext({} as TNavContext);

