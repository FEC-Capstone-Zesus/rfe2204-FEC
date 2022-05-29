import { useState } from 'react';
import styled from "styled-components";
import ImageGallery from './ImageGallery.jsx';
import RatingsAndStyles from './RatingsAndStyles.jsx';
import ImageGalleryContainer from '../../containers/overview/ImageGalleryContainer.js';
import RatingsAndStylesContainer from '../../containers/overview/RatingsAndStylesContainer.js';


const OverviewDIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
`
const ImagesStylesContainer = styled.div`
  display: flex;
`

const Overview = ( { product, styles, currentStyle, reviews, metaData, changeCurrentStyle } ) => {
  // console.log(currentStyle)
  // console.log('product: ', product);
  // console.log('reviews: ', reviews);
  // console.log('styles: ', styles);

  // var updateCurrentStyle = (style) => {
  //   changeCurrentStyle(style);
  // }

  return (
    <>
      <div className='overview-container'>
        <ImagesStylesContainer>
          <ImageGalleryContainer />
          <RatingsAndStylesContainer />
          {/* <div className='ratings-styles-container'>
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
          </div> */}
          {/* {product.id ? <p>{ JSON.stringify(product)}</p> : null}
          {reviews.product ? <p>{ JSON.stringify(reviews)}</p> : null}
          {styles.product_id ? <p>{ JSON.stringify(styles)}</p> : null} */}
        </ImagesStylesContainer>
      </div>
    </>
  );
};

export default Overview
