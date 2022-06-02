const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";

const OutfitCardAdd = ({ item, currentProduct, metaData, setOutfit, outfit, setOutfitStyle, styles, outfitStyle, className }) => {

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
console.log(styles)

let outfitAdd = function() {
  if(!outfit.includes(currentProduct))
  {setOutfit(outfit => [...outfit, currentProduct])}
  if(!outfitStyle.includes(styles.results[0].photos[0].thumbnail_url))
  {setOutfitStyle(outfitStyle => [...outfitStyle, styles.results[0].photos[0].thumbnail_url])}
};


  return (
    <Card_body onClick = {() => outfitAdd()}>
        <p>Add to Outfit</p>
        <img src = "../assets/plus-icon-163243.png"/>
    </Card_body>
  )
};

export default OutfitCardAdd