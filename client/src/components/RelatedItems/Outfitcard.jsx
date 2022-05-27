const axios = require('axios');
import React, { useState } from 'react';
import useAxios from 'axios-hooks'

const Outfitcard = ({ item, currentProduct }) => {

  return (
    <div className = "card">
      <div className = "card_body">
        <button>remove from outfit</button>
        <p>This is where outfits will go</p>
        {/* we will need to create a default image and give it a default onclick to add to outfit*/}
        {item !== undefined}
        {/* {styles !== undefined ? <img src = {styles.results[0].photos[0].thumbnail_url}/> : null} */}
        {/* <p>{products.name}</p>
        <p>{products.category}</p>
        <p>{products.default_price}</p> */}
      </div>
    </div>
  )
};

export default Outfitcard