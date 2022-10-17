<<<<<<< HEAD
import { useState } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

<<<<<<< HEAD
export default function App() {
  // state = {
  //   searchName: '',
  //   showModal: false,
  //   largeImg: {},
  // };

=======
const App = () => {
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
  const [searchName, setSearchName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImg, setLargeImg] = useState({});

  const changeName = name => {
    setSearchName(name);
  };

  const toggleModal = img => {
    setShowModal(prev => !prev);
    setLargeImg(img);
  };
<<<<<<< HEAD
=======

>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
  return (
    <>
      <Searchbar submitName={changeName} />
      <ImageGallery searchName={searchName} toggleModal={toggleModal} />
      <ToastContainer />
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <ImageGalleryItem webformatURL={largeImg.src} tags={largeImg.alt} />
        </Modal>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
};
export default App;
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
