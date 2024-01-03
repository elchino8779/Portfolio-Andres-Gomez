import { createContext, useContext, useState } from "react";

const SelectorContext = createContext();

const useSelectorContext = () => {
  return useContext(SelectorContext);
}

const SelectorContextProvider = ({children}) => {

  const [selectorX, setSelectorX] = useState('32px');
  const [selectorW, setSelectorW] = useState('60px')

  const handleSelector = (X, W) => {
    setSelectorX(X);
    setSelectorW(W);
  }

  const value = {selectorX, selectorW, handleSelector}

  return (
    <SelectorContext.Provider value={value}>
      {children}
    </SelectorContext.Provider>
  )
}

export { useSelectorContext, SelectorContextProvider }