const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";
import StarRating from "../StarRating.jsx"
import retrieve from "../../retrieve.js"

const CardImage = styled.img`
  height:12rem;
  width:100%;
  object-fit: cover;
`

const Outfitcard = ({ item, currentProduct, metaData, setOutfit, outfit, outfitStyle, className }) => {

  const Card_body = styled.li `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  box-sizing: border-box;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
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

  return (
    <Card_body onClick = {() => retrieve(`${item.id}`)}>
      {item.photo !== undefined ? <CardImage src = {item.photo}/> : null}
        <p>{item.productInfo.currentProduct.name}
        <br></br>{item.productInfo.currentProduct.category}
        <br></br>{item.productInfo.currentProduct.default_price}
        <br></br><StarRating ratings = {metaData}/>
        </p>
    </Card_body>
    // <div className = "card">
    //   <div className = "card_body">
    //     <button>remove from outfit</button>
    //     {outfitStyle !== undefined ? <CardImage src = {outfitStyle}/> : null}
    //     <p>{item.name}</p>
    //     <p>{item.category}</p>
    //     <p>{item.default_price}</p>
    //   </div>
    // </div>
  )
};

export default Outfitcard