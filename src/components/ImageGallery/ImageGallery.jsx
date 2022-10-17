import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GalleryList, GalleryItem } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import LoadMore from 'components/LoadMore/LoadMore';
import Loader from 'components/Loader/Loader';

export const ImageGallery = ({ searchName, toggleModal, currentPage, setCurrentPage, setImages, images }) => {
  const [status, setStatus] = useState('idle');
  const [isLoader, setIsLoader] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = '28811056-f3e78fd673175542d7021b7d4';
  const PER_PAGE = 12;

  useEffect(() => {
    if (searchName === "") {
      return;
    }
    reguestImages();
    setIsLoadMore(false);
    // eslint-disable-next-line
  }, [searchName, currentPage]);

  useEffect(() => {
    if (searchName === "") {
      return;
    }
    setStatus('panding');
  }, [searchName]);

  async function reguestImages() {
    setTimeout(async () => {

      const fetch = await axios
        .get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${searchName}&image_type=photo&orientation=horizontal&page=${currentPage}&per_page=${PER_PAGE}`
        )
        .catch(() => {
          setIsLoader(false);
          setIsLoadMore(false);
          console.clear();
        });
      const img = await fetch.data.hits;
      // console.log(images);
      const countImg = await fetch.data.totalHits;
      // console.log(countImg);

      if (img.length === 0 && currentPage === 1) {
        setStatus('rejected');
        setError(`За запитом ${searchName} нічого не знайдено(`);
        setTimeout(() => {
          setStatus('idle');
        });
        return;
      }
      if (0 < countImg && countImg <= PER_PAGE) {
        setStatus('resolved');
        setIsLoader(false);
        setIsLoadMore(false);

        setImages(prev => [...prev, ...img]);
        setError(null);
        return;
      }
      if (
        countImg === images.length + img.length ||
        Number(countImg) < Number(images.length + img.length)
      ) {
        setStatus('resolved');
        setIsLoader(false);
        setIsLoadMore(false);
        setImages(prev => [...prev, ...img]);
        setError(null);
        return;
      }
      setStatus('resolved');
      setIsLoader(false);
      setIsLoadMore(true);
      setImages(prev => [...prev, ...img]);
      setError(null);
    }, 1000);
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
    setIsLoader(true);
  };

  const openLargeImg = e => {
    if (e.target.nodeName === 'IMG') {
      const largeImg = {
        src: e.target.dataset.large,
        alt: e.target.alt,
      };
      toggleModal(largeImg);
    }
  };
  if (status === 'idle') {
    return <></>;
  }

  if (status === 'panding') {
    return <Loader />;
  }

  if (status === 'rejected') {
    toast.error(error);
    return;
  }

  if (status === 'resolved') {
    return (
      <>
        <GalleryList onClick={openLargeImg}>
          {images.map(({ id, webformatURL, tags, largeImageURL }) => (
            <GalleryItem key={id}>
              <ImageGalleryItem
                webformatURL={webformatURL}
                tags={tags}
                largeImg={largeImageURL}
              />
            </GalleryItem>
          ))}
        </GalleryList>
        {isLoader && <Loader />}
        {isLoadMore && <LoadMore loadMore={loadMore}>LoadMore</LoadMore>}
      </>
    );
  }
};

ImageGallery.propTypes = {
  searchName: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
};
