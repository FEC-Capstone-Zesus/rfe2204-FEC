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
  justify-content: center;
  align-items: center;
`

const Next_Button = styled.button `
outline: none;
border: none;
`
const Prev_Arrow = styled.img `
max-width:100%;
max-height:100%;
-webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Next_Arrow = styled.img `
max-width:100%;
max-height:100%;
`

const Relateditems = ( {product, reviews, styles, metaData, relatedProducts } ) => {

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const [outfitIndexes, setOutfitIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1
  });

  const [outfit, setOutfit] = useState(['add', 'add']);
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

  const handleOutfitCardTransition = useCallback(() => {
    if (outfitIndexes.currentIndex === outfit.length - 1) {
      setOutfitIndexes({
        previousIndex: outfit.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setOutfitIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex: prevState.currentIndex + 2 === outfit.length ? 0 : prevState.currentIndex + 2,
      }));
    }
  }, [outfitIndexes.currentIndex]);

  const handleCardTransitionReverse = useCallback(() => {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex - 1 < 0 ? relatedProducts.length - 1 : prevState.currentIndex - 1,
        nextIndex: prevState.currentIndex - 2 < 0 ? (prevState.currentIndex - 1) + (relatedProducts.length - 1) : prevState.currentIndex - 2,
      }));
  }, [indexes.currentIndex]);

  const handleOutfitCardTransitionReverse = useCallback(() => {
    setOutfitIndexes((prevState) => ({
      previousIndex: prevState.currentIndex,
      currentIndex: prevState.currentIndex - 1 < 0 ? outfit.length - 1 : prevState.currentIndex - 1,
      nextIndex: prevState.currentIndex - 2 < 0 ? (prevState.currentIndex - 1) + (outfit.length - 1) : prevState.currentIndex - 2,
    }));
  }, [outfitIndexes.currentIndex]);

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
        <Next_Button><Prev_Arrow src = '../assets/toppng.com-file-scroll-right-arrow-ico-554x981.png' onClick = {handleCardTransitionReverse}/></Next_Button>
        <CardWrapper>
          {relatedProducts.map((item, index) => <Relatedcard key = {index} className = {`${determineClasses(indexes,index)}`} item = {item} currentProduct = {product} metaData = {metaData}/>)}
        </CardWrapper>
        <Next_Button><Next_Arrow src = '../assets/toppng.com-file-scroll-right-arrow-ico-554x981.png' onClick = {handleCardTransition}/></Next_Button>
      </RelatedWrapper>
      <RelatedWrapper className ='outfitRow'>
      <Next_Button><Prev_Arrow src = '../assets/toppng.com-file-scroll-right-arrow-ico-554x981.png' onClick = {handleOutfitCardTransitionReverse}/></Next_Button>
        <CardWrapper className = 'outfitRow'>
          {outfit.map((item,index) => item === 'add' ? <OutfitAddCard
          key = {index}
          outfitStyle = {outfitStyle}
          currentProduct = {product}
          setOutfit = {setOutfit}
          outfit = {outfit}
          styles = {styles}
          setOutfitStyle = {setOutfitStyle}
          className = {`${determineClasses(outfitIndexes,index)}`}/> :
          <Outfitcard key = {index}
          item = {item}
          metaData = {metaData}
          outfit = {outfit[index]}
          outfitStyle = {outfitStyle}
          className = {`${determineClasses(outfitIndexes,index)}`}
          />)}
        </CardWrapper>
        <Next_Button><Next_Arrow src = '../assets/toppng.com-file-scroll-right-arrow-ico-554x981.png' onClick = {handleOutfitCardTransition}/></Next_Button>
      </RelatedWrapper>
    </div>
  );
};

export default Relateditems