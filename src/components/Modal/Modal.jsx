<<<<<<< HEAD
import { useEffect } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
import propTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ImgBox } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

<<<<<<< HEAD
export default function Modal({ toggleModal, children }) {
  useEffect(() => {
=======
const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const escClose = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
    window.addEventListener('keydown', escClose);
    return () => {
      window.removeEventListener('keydown', escClose);
    };
<<<<<<< HEAD
  });

  const escClose = e => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

=======
  }, [toggleModal]);

>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307
  const handleCloseModal = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleCloseModal}>
      <ImgBox>{children}</ImgBox>
    </Backdrop>,
    modalRoot
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> b825fac138b13e3a5f1843f3688c25e863618307

Modal.propTypes = {
  toggleModal: propTypes.func.isRequired,
};

export default Modal;
