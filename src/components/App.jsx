import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const changeName = name => {
    setSearchName(name);
    setCurrentPage(1)
    setImages([])
  };

  const toggleModal = img => {
    setShowModal(prev => !prev);
    setLargeImg(img);
  };
  return (
    <>
      <Searchbar submitName={changeName} />
      <ImageGallery searchName={searchName} toggleModal={toggleModal} currentPage={currentPage} setCurrentPage={setCurrentPage} setImages={setImages} images={images} />
      <ToastContainer />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ImageGalleryItem webformatURL={largeImg.src} tags={largeImg.alt} />
        </Modal>
      )}
    </>
  );
};
export default App;
