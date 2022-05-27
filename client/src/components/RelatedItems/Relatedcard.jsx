const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'


const Relatedcard = ({ item, currentProduct, metaData }) => {
  let starCount = 0;

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
    let reviewCount = Object.values(reviewsRelated.ratings).map((item) => Number(item))
    let total = reviewCount.reduce((a,b) => a + b)
    for(let i = 0; i < reviewCount.length; i++) {
      starCount += (reviewCount[i]/total) * (i + 1);
    }
  }
  console.log(reviewsRelated)
  console.log(metaData)

  return (
    <div className = "card">
      <div className = "card_body" onClick = {() => console.log('hello')}>
        <button id = "open" onClick = {() => setshowModal(true)}>☆</button>
        {showModal ? <div className = "compModal">
          <table>
            <thead>
              <tr>
                <td>{currentProduct.name}</td>
                <td>Characteristics</td>
                <td>{products.name}</td>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>hello</td>
              <td>hello</td>
              <td>hello</td>
            </tr>
            </tbody>
          </table>
          <button id = "close" onClick = {() => setshowModal(false)}> Close </button>
          </div> : null}
        {reviewsRelated !== undefined ? starCount : null}
        {styles !== undefined ? <img src = {styles.results[0].photos[0].thumbnail_url}/> : null}
        <p>{products.name}</p>
        <p>{products.category}</p>
        <p>{products.default_price}</p>
      </div>
    </div>
  )
};

export default Relatedcard