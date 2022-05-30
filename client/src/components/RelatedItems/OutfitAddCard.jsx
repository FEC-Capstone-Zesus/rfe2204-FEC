const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";

const Card = styled.div`
overflow:hidden;
box-shadow: 0 2px 20px #e1e5ee;
border-radius 0.2rem;
display: flex;
flex-direction:column;
justify-content:space-between;
cursor:pointer;
transition: transform 200ms ease-in;
position: absolute;
&:hover{
  transform:scale(1.02);
}
`
const CardImage = styled.img`
  height:12rem;
  width:100%;
  object-fit: cover;
`

const OutfitCardAdd = ({ item, currentProduct, metaData, setOutfit, outfit, setOutfitStyle, styles, outfitStyle }) => {
console.log(styles);

let outfitAdd = function() {
  if(!outfit.includes(currentProduct))
  {setOutfit(outfit => [...outfit, currentProduct])}
  if(!outfitStyle.includes(styles.results[0].photos[0].thumbnail_url))
  {setOutfitStyle(outfitStyle => [...outfitStyle, styles.results[0].photos[0].thumbnail_url])}
};


  return (
    <div className = "card">
      <div className = "card_body" onClick = {() => outfitAdd()}>
        <p>Add to Outfit</p>
        <CardImage src = "../assets/plus-icon-163243.png"/>
      </div>
    </div>
  )
};

export default OutfitCardAdd