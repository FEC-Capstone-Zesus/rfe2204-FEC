const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'
import styled from "styled-components";
import StarRating from "../StarRating.jsx"

const CardImage = styled.img`
  height:12rem;
  width:100%;
  object-fit: cover;
`

const Outfitcard = ({ item, currentProduct, metaData, setOutfit, outfit, outfitStyle, className }) => {

  console.log(className);
  console.log(metaData);

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
  return (
    <Card_body onClick = {() => console.log('hello')}>
      {outfitStyle !== undefined ? <CardImage src = {outfitStyle}/> : null}
        <p>{item.name}
        <br></br>{item.category}
        <br></br>{item.default_price}
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