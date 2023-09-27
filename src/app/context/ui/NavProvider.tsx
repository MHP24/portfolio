'use client';

import React, { FC, PropsWithChildren, useReducer } from 'react';
import { NavContext } from './NavContext';
import { navReducer } from './navReducer';
import { UIState } from '@/app/types';


export const NavProvider: FC<PropsWithChildren> = ({ children }) => {

  const [state, dispatch] = useReducer(navReducer, ({ isOpen: false } as UIState));

  const toggleMenu = () => {
    dispatch({ type: '[Menu] toggle' });
  };


  return (
    <NavContext.Provider value={{ ...state, toggleMenu }}>
      { children }
    </NavContext.Provider>
  );
};
