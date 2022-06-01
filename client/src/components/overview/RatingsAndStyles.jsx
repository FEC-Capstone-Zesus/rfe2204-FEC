import { useState } from 'react';
import styled from "styled-components";
import StarRating from '../StarRating.jsx'
const axios = require('axios')

const RatingsStyles = styled.div`
  width: 25rem;
  height: 35rem;
  padding: 2rem 1.5rem 2rem 1.5rem;
`
const Ratings = styled.div`
  margin-top: ${({length}) => (length > 8 ? `-2rem` : '0')};
`
const ProductName = styled.h1`
  margin-top: ${({length}) => (length > 8 ? '0.7rem' : '' )};
  margin-bottom: ${({length}) => (length > 8 ? '0.7rem' : '' )};
`
const ProductCatgory = styled.h5`
  margin-top: ${({length}) => (length > 8 ? '0.7rem' : '' )};
  margin-bottom: ${({length}) => (length > 8 ? '0.7rem' : '' )};
`
const StyledImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: 20rem;
`
const StyledImageSpan = styled.span`
  display: inline-block;
  position: relative;
  margin-right: -1rem;
  width: 6rem;
  padding: ${({length}) => (length > 4 ? `0.1rem 0` : '0.5rem 0')};
  overflow: hidden;
`
const StyledImageParent = styled.div`
  width: 6rem;
  height: 6rem;
`
const StyledImage = styled.img`
  width:  4rem;
  height: 4rem;
  border: 1px solid;
  object-fit: cover;
  clip-path: circle();
  &:hover {
    cursor: pointer;
  }
`
StyledImage.defaultProps = {
  src: '',
};
const StyledImageEmpty = styled.span`
  margin: 1rem;
  width:  4rem;
  height: 4rem;
`
const CheckMark = styled.div`
  z-index: 1;
  background: rgba(250,250,250,100);
  position: absolute;
  top: 0.5rem;
  left: 3rem;
  text-align: center;
  border: 1px solid;
  width: 1rem;
  font-size: 70%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`
const SelectorContainer = styled.div`
`
const StarFraction = styled.span`
 display: block;
 overflow: hidden;
 width: ${({starFraction}) => (starFraction ? `${starFraction}%` : '')};
`

var totalQty = 0;

const RatingsAndStyles = ( { product,
                             styles,
                             currentStyle,
                             slice,
                             reviews,
                             metaData,
                             changeCurrentStyle,
                             changeMainImage,
                             changeImagesArray } ) => {


  if (currentStyle.style_id) {
    var [skusArray, setSkusArray] = useState(Object.entries(currentStyle.skus).sort((a, b) => a[1].size - b[1].size));

    totalQty = skusArray.reduce((total, sku) => {
      return total + sku[1].quantity;
    }, 0)

    var ratings = Object.entries(metaData.ratings);

    var totalReviews = ratings.reduce((total, rating) => {
      return total + parseInt(rating[1]);
    }, 0);

    var [sku, setSku] = useState('');
    var [size, setSize] = useState('');
    var [qty, setQty] = useState('');
    var [sizeSelected, setSizeSelected] = useState(true);
    var [qtySelect, setQtySelect] = useState(0);
    var [inStock, setInStock] = totalQty ? useState(true) : useState(false);
  }

  const updateCurrentStyle = (style) => {
    if (style.style_id !== currentStyle.style_id) {
      changeCurrentStyle(style);
      changeMainImage(style.photos[slice[2]].url);
      changeImagesArray(style.photos);
      setSkusArray(Object.entries(style.skus).sort((a, b) => a[1].size - b[1].size));
      setSku('');
      setSize('');
      setSizeSelected(true);
      setQty(0);
      setQtySelect(0);

      totalQty = skusArray.reduce((total, sku) => {
        return total + sku[1].quantity;
      }, 0)

      setInStock(totalQty ? true : false);
    }
  }

  const changeSelect = (e) => {
    e.preventDefault();

    if (e.target.name === 'size') {
      if (e.target.value === 'selectSize') {
        setSku('');
        setSize('');
        setQty(0);
        setQtySelect(0);
      } else {
        var value = JSON.parse(e.target.value);
        setSku(value[0]);
        setSize(value[1].size);
        setSizeSelected(true);
        setQty(1);
        setQtySelect(value[1].quantity);
      }
    } else {
      setQty(parseInt(e.target.value));
    }
  }

  const addToCart = (e) => {
    e.preventDefault();
    if (!size) {
      setSizeSelected(false);
    } else {
      axios.post('/cart', { count: qty, sku_id: sku })
      .then(() => console.log('success'))
    }
  }

  return (
    <RatingsStyles>
      {totalReviews ?
      <Ratings length={styles.results.length}>
        <span>
          <StarRating ratings={metaData} />
        </span>
        &nbsp;
        <span>
          <a className='reviews' style={{ fontSize: 0.6 + 'em' }} href='#allRatings'>Read all {totalReviews} reviews</a>
        </span>
      </Ratings> :
      null }

      <div>
        <ProductCatgory length={styles.results.length}>
          {product.id ? product.category.toUpperCase() : null}
        </ProductCatgory>
      </div>
      <ProductName length={styles.results.length}>{product.id ? product.name : null}</ProductName>

      {currentStyle.style_id ? !currentStyle.sale_price ?
        <span>${currentStyle.original_price}</span> :
        <>
          <span style={{ color: 'red' }}>${currentStyle.sale_price}</span>
          &nbsp;
          &nbsp;
          <span style={{textDecorationLine: 'line-through',
                     textDecorationStyle: 'solid'}}>
                     ${currentStyle.original_price}</span>
        </>
      : null}
      <div style={{ height: 1 + 'rem' }}></div>
      <div className='styles-container'>
        <div>
        <span style={{ fontWeight: 'bolder' }}>STYLE ></span> {currentStyle.style_id ?
            <span style={{ fontWeight: 'lighter' }}>{currentStyle.name.toUpperCase()}</span>: null}
        </div>
        &nbsp;
        <StyledImagesContainer>
        {styles.product_id ? styles.results.map(style => {
          return (<StyledImageSpan key={style.style_id}
                                   data-testid={style.name}
                                   id={style.name}
                                   length={styles.results.length}
                                   onClick={() => updateCurrentStyle(style)}>
                    {style.style_id === currentStyle.style_id ? <CheckMark>✓</CheckMark> : null}
                    <StyledImage src={style.photos[0].thumbnail_url} />
                  </StyledImageSpan>)
          })
        : null}
        {styles.product_id ? styles.results.length < 5 ?
         styles.results.map(style => {
          return (<StyledImageSpan>
                    <StyledImageEmpty/>
                  </StyledImageSpan>)
          })
        : null : null}
        </StyledImagesContainer>
      </div>

      <SelectorContainer>
        {sizeSelected ? <div style={{ marginTop: -0.5 + 'rem', height: 1.2 + 'rem' }} >
                          <p style={{ height: 1.2 + 'rem' }} ></p>
                        </div> :
                        <div style={{ marginTop: -0.5 + 'rem', height: 1.2 + 'rem' }}>
                          <p>Please select size</p>
                        </div>}
        <select name='size'
                data-testid='size'
                id='size'
                style={{ width: 16 + 'rem' }}
                onChange={(e) => changeSelect(e)}
                disabled={!inStock}>
                <option value='selectSize' >SELECT SIZE</option>
          {inStock ?
            skusArray.map((sku, i) => {
              if (sku[1].quantity) {
                return (
                  <option key={sku[0]} value={JSON.stringify(sku)} >{sku[1].size}</option>
                )
              }
            }) :
            <option value='outOfStock' >OUT OF STOCK</option> }
        </select>
        &nbsp;
        &nbsp;
        &nbsp;
        {size ?
        <select name='qty'
                data-testid='qty'
                id='qty'
                onChange={(e) => changeSelect(e)}
                style={{ width: 7 + 'rem' }}>
          <option value='Select Qty' >1</option>
          {Array.from(Array(qtySelect).keys()).map(x => x + 1).slice(1, 15).map((qty) =>
          <option key={qty} value={qty} >{qty}</option>)}
        </select> :
        <select name='qty'
                disabled={true}
                style={{ width: 7 + 'rem' }}>
          <option value='Select Qty' >-</option>
        </select>}

      <button style={{ width: 24.3 + 'rem',
                       fontWeight: 500,
                       marginTop: 1 + 'rem',
                       display: 'flex',
                       justifyContent: 'space-between' }}
              disabled={!inStock}
              id='addToBag'
              onClick={(e) => addToCart(e)}>
        <p style={{ fontWeight: 'bold', top: 50 + '%' }}>ADD TO BAG</p>
        <p style={{ fontWeight: 'bold', top: 50 + '%' }}>+</p>
      </button>
      </SelectorContainer>
      &nbsp;
      <div className='star-item'></div>
    </RatingsStyles>
  );
};

export default RatingsAndStyles
