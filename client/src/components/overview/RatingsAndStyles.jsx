import { useState } from 'react';
import styled from "styled-components";

const RatingsStyles = styled.div`
  width: 25rem;
  height: 35rem;
  padding: 2rem 1.5rem 2rem 1.5rem;
`

var totalQty = 0;

const RatingsAndStyles = ( { product, styles, currentStyle, reviews, changeCurrentStyle } ) => {

  if (styles.product_id) {
    var [currentImage, changeImage] = useState(styles.results[0].photos[0].thumbnail_url);
    var [photosCarousel, changePhotosCarousel] = useState(styles.results[0].photos.slice(0, 7));
    var max = styles.results[0].photos.length;
  }

  if (currentStyle.style_id) {
    var skusArray = Object.entries(currentStyle.skus).sort((a, b) => a[1].size - b[1].size);

    totalQty = skusArray.reduce((total, sku) => {
      return total + sku;
    }, 0)
    var [skus, changeSkus] = useState(skusArray);
    var [qty, changeQty] = useState(0);
  }

  var averageRating = 0;
  if (reviews.product_id) {
    var ratings = Object.entries(reviews.ratings);
    averageRating = ratings.reduce((total, rating) => {
      return total + (rating[0] * rating[1]);
    }, 0) / reviews.ratings.length;
  }

  const updateCurrentStyle = (style) => {
    if (photo.thumbnail_url !== currentImage) {
      styles.results[0].photos.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          imageIndex = i;
        }
      })
      changeImage(photo.thumbnail_url);
    }
  }

  const changeSelect = (e) => {
    e.preventDefault();


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
      {currentStyle.style_id ? !currentStyle.sale_price ?
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
        {styles.product_id ? styles.results.map(style =>
        <img key={style.style_id} src={style.photos[0].thumbnail_url} ></img>) : null}
      </div>
      <div className='selector-container'>
        <select name='size' onChange={(e) => changeSelect(e)}>
          <option value='Select Size' >Select Size</option>
          {currentStyle.style_id ? skusArray.map(sku =>
          <option key={sku[0]} value={skus[0] + ' ' + sku[1].size} >{sku[1].size}</option>) : null}
        </select>
        <select name='qty' onChange={(e) => changeSelect(e)}>
          <option value='Select Qty' >Select Qty</option>
          {currentStyle.style_id ? styles.results.map((style, i) =>
          <option key={style.style_id} value={i + 1} >{i + 1}</option>) : null}
        </select>
      </div>
      <button style={{ width: 10 + 'rem', fontWeight: 500 }}>ADD TO CART</button>
      <div className='star-item'></div>
    </RatingsStyles>
  );
};

export default RatingsAndStyles
