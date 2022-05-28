import { useState } from 'react';
import styled from "styled-components";

const RatingsStyles = styled.div`
  width: 25rem;
  height: 35rem;
  padding: 2rem 1.5rem 2rem 1.5rem;
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
  padding: 0.5rem 0;
  overflow: hidden;
`
const StyledImage = styled.img`
  width: 6rem;
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
const CheckMark = styled.div`
  z-index: 1;
  background: rgba(250,250,250,100);
  position: absolute;
  top: 0.7rem;
  left: 4rem;
  text-align: center;
  border: 1px solid;
  width: 1rem;
  font-size: 70%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
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
    var [sku, setSku] = useState('');
    var [size, setSize] = useState('');
    var [qty, setQty] = useState('');
    var [sizeSelected, setSizeSelected] = useState(true);
    var [qtySelect, setQtySelect] = useState(0);
    var [inStock, setInStock] = totalQty ? useState(true) : useState(false);
  }

  var averageRating = 0;
  if (metaData.product_id) {
    var ratings = Object.entries(metaData.ratings);
    var total = 0;
    averageRating = ratings.reduce((stars, rating) => {
      total = total + parseInt(rating[1]);
      return stars + (rating[0] * rating[1]);
    }, 0) / total;
  }

  const updateCurrentStyle = (style) => {
    if (style.style_id !== currentStyle.style_id) {
      changeCurrentStyle(style);
      changeMainImage(style.photos[slice[2]].thumbnail_url);
      changeImagesArray(style.photos);
      setSkusArray(Object.entries(style.skus).sort((a, b) => a[1].size - b[1].size));
      setSku('');
      setSize('');
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
      console.log(size);
      console.log(qty);
      console.log(sku);
    }
  }

  return (
    <RatingsStyles>
      <div className='ratings'>
        <span>
          {metaData.product_id ?
            <>
              <span>{('⭐️').repeat(Math.floor(averageRating))}</span>
            </>
          : null}
        </span>
        &nbsp;
        <span>
          Read all reviews
        </span>
      </div>

      <div><h5>{product.id ? product.category.toUpperCase() : null}</h5></div>
      <h1>{product.id ? product.name : null}</h1>

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
        <div>
        <span style={{ fontWeight: 'bolder' }}>STYLE ></span> {currentStyle.style_id ?
            <span style={{ fontWeight: 'lighter' }}>{currentStyle.name.toUpperCase()}</span>: null}
        </div>
        &nbsp;
        <StyledImagesContainer>
        {styles.product_id ? styles.results.map(style => {
          return (<StyledImageSpan key={style.style_id}
                                   onClick={() => updateCurrentStyle(style)}>
                    {style.style_id === currentStyle.style_id ? <CheckMark>✓</CheckMark> : null}
                    <StyledImage src={style.photos[0].thumbnail_url} />
                  </StyledImageSpan>)
          })
        : null}
        </StyledImagesContainer>
      </div>

      <div className='selector-container'>
        {sizeSelected ? <div></div> : <div><h3 style={{ color: 'red' }}>Please select size</h3></div>}
        <select name='size'
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
          <option value='' >OUT OF STOCK</option> }
        </select>
        &nbsp;
        {size ?
        <select name='qty' onChange={(e) => changeSelect(e)}>
          <option value='Select Qty' >1</option>
          {Array.from(Array(qtySelect).keys()).slice(1, 15).map((qty) =>
          <option key={qty} value={qty + 1} >{qty + 1}</option>)}
        </select> :
        <select name='qty' disabled={true}>
          <option value='Select Qty' >-</option>
        </select>}

      </div>
      <button style={{ width: 10 + 'rem', fontWeight: 500 }}
              disabled={!inStock}
              onClick={(e) => addToCart(e)}>ADD TO CART +</button>
      &nbsp;
      <div className='star-item'></div>
    </RatingsStyles>
  );
};

export default RatingsAndStyles
