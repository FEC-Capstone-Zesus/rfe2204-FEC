const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";

const OutfitCardAdd = ({ item, currentProduct, metaData, setOutfit, outfit, setOutfitStyle, styles, outfitStyle, className, key }) => {

  const CardImage = styled.img`
  height:12rem;
  width:100%;
  object-fit: cover;
`

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

let outfitAdd = function() {
  let flag = false;
  for(let i = 0; i < outfit.length; i++) {
    if(Object.values(outfit[i]).includes(currentProduct.id)) {
      flag = true;
      break;
    }
  }
  if(!flag) {
    setOutfit([...outfit, {photo: styles.results[0].photos[0].thumbnail_url, add: false, id: currentProduct.id, productInfo: {currentProduct}}])
  }
};


  return (
    <Card_body>
        <CardImage onClick = {() => outfitAdd()} src = "../assets/plus-icon-163243.png"/>
        <p>Add to Outfit</p>
    </Card_body>
  )
};

export default OutfitCardAdd