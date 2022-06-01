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
justify-content:column;
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

const Outfitcard = ({ item, currentProduct, metaData, setOutfit, outfit, outfitStyle }) => {


  return (
    <div className = "card">
      <div className = "card_body">
        <button>remove from outfit</button>
        {outfitStyle !== undefined ? <CardImage src = {outfitStyle}/> : null}
        <p>{item.name}</p>
        <p>{item.category}</p>
        <p>{item.default_price}</p>
      </div>
    </div>
  )
};

export default Outfitcard