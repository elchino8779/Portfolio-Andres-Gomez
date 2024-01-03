import { createContext, useContext, useState } from "react";

const ModalContextVideo = createContext();

const useModalContextVideo = () => {
  return useContext(ModalContextVideo)
}

const initialContent = {
  title: "",
  description: [],
  imgsName: [],
  videoName: ""
}

const ModalContexVideoProvider = ({ children }) => {

  const [visibilityModal, setVisibilityModal] = useState(false)
  const [contentModal, setContentModal] = useState(initialContent)

  const handleVisibilityTrue = (el) => {
    setContentModal(el)
    setVisibilityModal(true)
  }

  const handleVisibilityFalse = () => {
    setContentModal(initialContent)
    setVisibilityModal(false)
  }

  const value = { handleVisibilityTrue, handleVisibilityFalse, contentModal, visibilityModal }

  return (
    <ModalContextVideo.Provider value={value}>
      {children}
    </ModalContextVideo.Provider>
  )
}

export { useModalContextVideo, ModalContexVideoProvider }