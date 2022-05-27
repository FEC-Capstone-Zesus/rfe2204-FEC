import Relatedcard from './Relatedcard.jsx';
import Outfitcard from './Outfitcard.jsx';
import React, { useState } from 'react';

const Relateditems = ( {product, reviews, styles, metaData, relatedProducts } ) => {

  const [outfit, setOutfit] = useState(['test']);

  return (
    <div className ="relatedRow">
      <div className = "related">
      {relatedProducts.map((item) => <Relatedcard item = {item} currentProduct = {product} metaData = {metaData}/>)}
    </div>
    <div className = 'outfitRow'>
      {outfit.map((item) => <Outfitcard item = {item} currentProduct = {product}/>)}
    </div>
    </div>
  );
};

export default Relateditems