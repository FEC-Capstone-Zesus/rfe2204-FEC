import { useState } from 'react';
import styled from "styled-components";

const MainImage = styled.div`
  width: 45rem;
  height: 35rem;
  background: rgba(226,226,226,100);
  background-image: ${({currentImage}) => (currentImage ? `url(${currentImage})` : "url('')")};
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
  &:hover {
    cursor: zoom-in;
  }
`
const ImageCarousel = styled.div`
  background: rgba(226,226,226,0.5);
  position: absolute;
  margin-top: 3.5rem;
  margin-left: 1.5rem;
  float: left;
`
const ImageThumbnail = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid;
  background: rgba(226,226,226,100);
  background-image: ${({currentThumbnail}) => (currentThumbnail ? `url(${currentThumbnail})` : "url('')")};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`
const CarouselArrow = styled.div`
  width: 3rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`
const ImageUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 3rem;
`
const ImageNoUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 3rem;
`
const HorizontalButtons = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  width: 38rem;
  padding-right: 3rem;
  padding-top: 16rem;
`
const ArrowContainer = styled.div`
  z-position: 1;
  width: 1rem;
  height: 3rem;
`
const ArrowLeft = styled.div`
  background: rgba(226,226,226,0.5);
  margin-left: 1rem;
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`
const ArrowRight = styled.div`
  background: rgba(226,226,226,0.5);
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`

var start = 0;
var end = 7;
var imageIndex = 0;

const RatingsAndStyles = ( { product, styles, reviews } ) => {

  if (styles.product_id) {
    var [currentImage, changeImage] = useState(styles.results[0].photos[0].thumbnail_url);
    var [photosCarousel, changePhotosCarousel] = useState(styles.results[0].photos.slice(0, 7));
    var max = styles.results[0].photos.length;
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== currentImage) {
      styles.results[0].photos.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          imageIndex = i;
        }
      })
      changeImage(photo.thumbnail_url);
    }
  }

  const updateCarousel = (direction) => {
    if ((start > 0 && direction === 'up') || (end < max && direction === 'down')) {
      start = direction === 'down' ? start + 1 : start - 1;
      end = direction === 'down' ? end + 1 : end - 1;

      var photosArray = styles.results[0].photos.slice(start, end);

      if (photosCarousel[0].thumbnail_url === currentImage && direction === 'down') {
        imageIndex++;
        changeImage(photosCarousel[1].thumbnail_url);
      }

      if (photosCarousel[6].thumbnail_url === currentImage && direction === 'up') {
        imageIndex--;
        changeImage(photosCarousel[5].thumbnail_url);
      }

      changePhotosCarousel(photosArray);
    }
  }

  const horizontalClick = (direction) => {
    if ((imageIndex > 0 && direction === 'left') || (imageIndex < max - 1 && direction === 'right')) {
      imageIndex = direction === 'right' ? imageIndex + 1 : imageIndex - 1;

      if (photosCarousel[0].thumbnail_url === currentImage && direction === 'left') {
        start--;
        end--;
        var photosArray = styles.results[0].photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      if (photosCarousel[6].thumbnail_url === currentImage && direction === 'right') {
        start++;
        end++;
        var photosArray = styles.results[0].photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      changeImage(styles.results[0].photos[imageIndex].thumbnail_url);

    }
  }

  return (
    <div className='ratings-styles-container'>
      <div className='ratings'>
      </div>
      <h3>{product.name}</h3>
      {currentStyle ? !currentStyle.sale_price ?
        <p>${currentStyle.original_price}</p> :
        <>
          <p style={{ color: 'red' }}>${currentStyle.sale_price}</p>
          <p style={{textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid'}}>
                    ${currentStyle.original_price}</p>
        </>
      : null}
      <div className='styles-container'>
        <img></img>
      </div>
      <div className='selector-container'>
        <select name='size'></select>
        <select name='qty'></select>
      </div>
      <button style={{ width: 10 + 'rem', fontWeight: 500 }}>ADD TO CART</button>
      <div className='star-item'></div>
  </div>
  );
};

export default RatingsAndStyles
