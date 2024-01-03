import { useContext, createContext, useState } from "react";

const ModalContext = createContext();

const useModalContext = () => {
  return useContext(ModalContext);
}

const initialContentModal = {
  description: "",
  iconName: "",
  imgName: "",
  name: "",
  skills: []
}

const ModalContextProvider = ({ children }) => {

  const [visibilityModal, setVisibilityModal] = useState(false)
  const [contentModal, setContentModal] = useState(initialContentModal)

  const handleVisibilityTrue = (el) => {
    setContentModal(el)
    setVisibilityModal(true)
  }
  const handleVisibilityFalse = () => {
    setVisibilityModal(false)
    setContentModal(initialContentModal);
  }

  const value = {handleVisibilityTrue, handleVisibilityFalse, visibilityModal, contentModal};

  return(
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  )
}

export {useModalContext, ModalContextProvider}