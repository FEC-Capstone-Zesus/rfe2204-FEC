const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";
import StarRating from "../StarRating.jsx"
import retrieve from "../../retrieve.js"

const CardImage = styled.img `
  height:60%;
  width:100%;
  object-fit: cover;
`

const Relatedcard = ({ item, currentProduct, metaData, index }) => {

  const Cardbody = styled.li `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  `
  const Button_Star = styled.button`
  &:hover{
    transform:scale(1.02);
  }
  `
  let starCount = 0;
  let commonChars = [];

  const [showModal, setshowModal] = useState(false);

  const [{ data: products, loading: loadingProducts, error: errorProducts }, refetch] = useAxios(
    `/products/${item}`
  )

  const [{ data: styles, loading: loadingStyles, error: errorStyles }, reStyle] = useAxios(
    `/products/${item}/styles`
  )

  const [{ data: reviewsRelated, loading: loadingReviews, error: errorReviews }, reReview] = useAxios(
    `/reviews/meta?product_id=${item}`
  )
  if (loadingProducts) return <p>Loading...</p>
  if (errorProducts) return <p>Error! </p>
  if (loadingReviews) return <p>Loading...</p>
  if (errorReviews) return <p>Error!</p>

  if(reviewsRelated) {
    let reviewsRelatedKeys = Object.keys(reviewsRelated.characteristics)
    let metaDataKeys = Object.keys(metaData.characteristics)
    let reviewCount = Object.values(reviewsRelated.ratings).map((item) => Number(item))
    let total = reviewCount.reduce((a,b) => a + b)
    for(let i = 0; i < reviewCount.length; i++) {
      starCount += (reviewCount[i]/total) * (i + 1);
    }
    metaDataKeys.forEach((item) => commonChars.push(item))
    reviewsRelatedKeys.forEach(function(item) {if(!commonChars.includes(item)) {
      commonChars.push(item)
    }})
  }
  let round = function(number) {
    return Math.round(number * 100)/100
  }

  return (
      <Cardbody>
        <Button_Star id = "open" onClick = {() => setshowModal(true)}>☆</Button_Star>
        {showModal ? <div className = "compModal">
          <div className = 'compModalContent'>
            <table>
            <thead>
              <tr>
                <td>{currentProduct.name}</td>
                <td>Characteristics</td>
                <td>{products.name}</td>
              </tr>
            </thead>
            <tbody>
            {commonChars.map((item, index) => <tr key = {index}>
              <td>{metaData.characteristics[item] !== undefined ? round(metaData.characteristics[item].value) : null}</td>
              <td>{item}</td>
              <td>{reviewsRelated.characteristics[item] !== undefined ? round(reviewsRelated.characteristics[item].value) : null}</td>
              </tr>)}
            </tbody>
          </table>
          <button id = "close" onClick = {() => setshowModal(false)}> Close </button></div>
          </div> : null}
        {styles !== undefined ? <CardImage src = {styles.results[0].photos[0].thumbnail_url} onClick = {() => retrieve(`${item}`)}/> : null}
        <p>{products.name}
        <br></br>{products.category}
        <br></br>{products.default_price}
        <br></br><StarRating ratings = {reviewsRelated}/>
        </p>
      </Cardbody>
  )
};

export default Relatedcard