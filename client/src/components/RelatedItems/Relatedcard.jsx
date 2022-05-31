const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";


const CardImage = styled.img`
  height:12rem;
  width:100%;
  object-fit: cover;
`

const CompareModal = styled.div`
`

const Relatedcard = ({ item, currentProduct, metaData, className, index }) => {

  const Card_body = styled.li`
  background: #ffffff;
  border-radius: 2px;
  border: 1px solid #eeeeee;
  box-shadow: ${className === 'active' ? '0 30px 20px rgba(0, 0, 0, 0.2)' : '0 10px 5px rgba(0, 0, 0, 0.1)'};
  overflow: auto;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: column;
  cursor: pointer;
  transition: all 0.75s ease;
  opacity: ${className === 'active' ? 1 : 0};
  position: absolute;
  `
  const Button_Star = styled.button`
  position: absolute;
  top:0;
  right:0;
  border: none;
  background: none;
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
  if (errorProducts) return <p>Error!</p>
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
      <Card_body onClick = {() => console.log('hello')}>
        <Button_Star id = "open" onClick = {() => setshowModal(true)}>☆</Button_Star>
        {showModal ? <CompareModal className = "compModal">
          <div className compModalContent>
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
          </CompareModal> : null}
        {styles !== undefined ? <CardImage src = {styles.results[0].photos[0].thumbnail_url}/> : null}
        <p>{products.name}
        <br></br>{products.category}
        <br></br>{products.default_price}
        <br></br>{reviewsRelated !== undefined ? starCount : null}
        </p>
      </Card_body>
  )
};

export default Relatedcard