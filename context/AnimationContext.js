"use client";

import { createContext, useContext, useState } from 'react';

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const resetAnimations = () => {
    setShouldAnimate(false);
    setTimeout(() => setShouldAnimate(true), 100);
  };

  return (
    <AnimationContext.Provider value={{ shouldAnimate, resetAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
}
