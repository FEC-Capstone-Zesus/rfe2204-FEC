import Relatedcard from './Relatedcard.jsx';
import Outfitcard from './Outfitcard.jsx';
import OutfitAddCard from './OutfitAddCard.jsx';
import React, { useState, useEffect, useCallback } from 'react';
import styled from "styled-components";

const CardWrapper = styled.ul`
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: row;
  height: 265px;
  width: 200px;
  margin: 0px;
  align-items: center;
`
const RelatedWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Next_Button = styled.button `
top: 50%;
left: 50%;
`

const Relateditems = ( {product, reviews, styles, metaData, relatedProducts } ) => {
  console.log(product)
  console.log(reviews)
  console.log(styles)
  console.log(metaData)
  console.log(relatedProducts)


  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });
  const [outfit, setOutfit] = useState([]);
  const [outfitStyle, setOutfitStyle] = useState([]);

  const handleCardTransition = useCallback(() => {
    if (indexes.currentIndex === relatedProducts.length - 1) {
      setIndexes({
        previousIndex: relatedProducts.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === relatedProducts.length ? 0 : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex]);

  const handleCardTransitionReverse = useCallback(() => {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1 < 0 ? relatedProducts.length - 1 : prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex - 2 < 0 ? (prevState.currentIndex - 1) + (relatedProducts.length - 1) : prevState.currentIndex - 2,
      }));
  }, [indexes.currentIndex]);

  let determineClasses = function(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
      return 'active';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next';
    } else if (indexes.previousIndex === cardIndex) {
      return 'prev';
    }
    return 'inactive';
  };
  return (
    <div className ="wrapper">
      <RelatedWrapper className ='relatedRow'>
        <button onClick = {handleCardTransitionReverse}> This will go back</button>
        <CardWrapper>
          {relatedProducts.map((item, index) => <Relatedcard key = {index} className = {`${determineClasses(indexes,index)}`} item = {item} currentProduct = {product} metaData = {metaData}/>)}
        </CardWrapper>
        <Next_Button onClick = {handleCardTransition}>This will handle the next</Next_Button>
      </RelatedWrapper>
      <RelatedWrapper className ='outfitRow'>
      <CardWrapper className = 'outfitRow'>
        <OutfitAddCard outfitStyle = {outfitStyle} currentProduct = {product} setOutfit = {setOutfit} outfit = {outfit} styles = {styles} setOutfitStyle = {setOutfitStyle}/>
        {outfit.map((item,index) => <Outfitcard key = {index} item = {item}
        metaData = {metaData}
        outfitStyle = {outfitStyle[index]}/>)}
      </CardWrapper>
      </RelatedWrapper>
    </div>
  );
};

export default Relateditems