import { useState } from 'react';
import styled from "styled-components";

// Change these styled divs. Keeping here to remember syntax.
const OverviewDIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
`;

const Overview = ( { product, reviews, styles } ) => {
  if (styles.product_id) {
    var [currentStyle, changeStyle] = useState(styles.results[0])
  }
  console.log('product: ', product);
  console.log('reviews: ', reviews);
  console.log('styles: ', styles);
  return (
    <>
      <div className='overview-container'>
        <div className='images-styles-container'>
          <div className='main-image'>
            <img></img>
            <div className='image-carousel'>
              <img></img>
            </div>
            <div className='horizontal-buttons'>
              <div className='left-button'></div>
              <div className='right-button'></div>
            </div>
            <div className='expand-button'></div>
          </div>
          <div className='ratings-styles-container'>
            <div className='ratings'></div>
            <h3>{product.name}</h3>
            {currentStyle ? !currentStyle.sale_price ?
              <p>${currentStyle.original_price}</p> :
              <>
                <p style={{ color: 'red' }}>${currentStyle.sale_price}</p>
                <p style={{textDecorationLine: 'line-through',
                            textDecorationStyle: 'solid'}}>
                    ${currentStyle.original_price}
                </p>
              </>
            : null}
            <div className='styles-container'>
              <img></img>
            </div>
            <div className='selector-container'>
              <input type='dropdown' name='size'></input>
              <input type='dropdown' name='qty'></input>
            </div>
            <button>Add to cart</button>
            <div className='star-item'></div>
          </div>
          {/* {product.id ? <p>{ JSON.stringify(product)}</p> : null}
          {reviews.product ? <p>{ JSON.stringify(reviews)}</p> : null}
          {styles.product_id ? <p>{ JSON.stringify(styles)}</p> : null} */}
        </div>
        <div className='summary-container'>
          <div className='summary'>
            <h5>Summary Title</h5>
            <p>Summary</p>
          </div>
          <div className='features'>
            <ul>
              <li>
                List of features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview
