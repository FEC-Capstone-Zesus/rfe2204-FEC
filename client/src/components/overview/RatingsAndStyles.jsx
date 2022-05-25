import { useState } from 'react';
import styled from "styled-components";

const RatingsStyles = styled.div`
  width: 25rem;
  height: 35rem;
  padding: 2rem 1.5rem 2rem 1.5rem;
`

var start = 0;
var end = 7;
var imageIndex = 0;

const RatingsAndStyles = ( { product, styles, currentStyle, reviews, changeCurrentStyle } ) => {

  if (styles.product_id) {
    var [currentImage, changeImage] = useState(styles.results[0].photos[0].thumbnail_url);
    var [photosCarousel, changePhotosCarousel] = useState(styles.results[0].photos.slice(0, 7));
    var max = styles.results[0].photos.length;
  }

  var averageRating = 0;
  if (reviews.product_id) {
    averageRating = reviews.ratings.reduce((total, rating) => {
      return total + rating;
    }, 0) / reviews.ratings.length;
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

  return (
    <RatingsStyles>
      <div className='ratings'>
        <span>
          {reviews.product_id ?
            <>
              <h3>{Math.floor(averageRating)}</h3>
              <p>{(⭐️).repeat(Math.floor(averageRating))}</p>
            </>
          : null}
        </span>
        <span>
          Read all reviews
        </span>
      </div>
      <h3>{product.id ? product.category.toUpperCase() : null}</h3>
      <h1>{product.id ? product.name : null}</h1>
      &nbsp;
      {currentStyle ? !currentStyle.sale_price ?
        <p>${currentStyle.original_price}</p> :
        <>
          <p style={{ color: 'red' }}>${currentStyle.sale_price}</p>
          <p style={{textDecorationLine: 'line-through',
                    textDecorationStyle: 'solid'}}>
                    ${currentStyle.original_price}</p>
        </>
      : null}
      &nbsp;
      <div className='styles-container'>
        <h3 style={{ fontWeight: 'bolder' }}>STYLE > {currentStyle.style_id ?
            <p style={{ fontWeight: 'lighter' }}>{currentStyle.name.toUpperCase()}</p> : null}</h3>
        <img></img>
      </div>
      <div className='selector-container'>
        <select name='size'></select>
        <select name='qty'></select>
      </div>
      <button style={{ width: 10 + 'rem', fontWeight: 500 }}>ADD TO CART</button>
      <div className='star-item'></div>
    </RatingsStyles>
  );
};

export default RatingsAndStyles
