import { useState } from 'react';
import styled from "styled-components";
import ImageGallery from './ImageGallery.jsx';
import RatingsAndStyles from './RatingsAndStyles.jsx'

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
const ImageUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 3rem;
`
const ImageNoUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 3rem;
`

const Overview = ( { product, reviews, styles } ) => {
  if (styles.product_id) {
    var [currentStyle, changeStyle] = useState(styles.results[0]);
  }

  // console.log('product: ', product);
  // console.log('reviews: ', reviews);
  // console.log('styles: ', styles);
  return (
    <>
      <div className='overview-container'>
        <ImagesStylesContainer>
          <ImageGallery currentStyle={currentStyle} />
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
          {/* {product.id ? <p>{ JSON.stringify(product)}</p> : null}
          {reviews.product ? <p>{ JSON.stringify(reviews)}</p> : null}
          {styles.product_id ? <p>{ JSON.stringify(styles)}</p> : null} */}
        </ImagesStylesContainer>
      </div>
    </>
  );
};

export default Overview
