import Relatedcard from './Relatedcard.jsx';
import Outfitcard from './Outfitcard.jsx';
import OutfitAddCard from './OutfitAddCard.jsx';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from "styled-components";

const Carouselcontainer = styled.div `
  width: 1040px;
  margin: 50px auto;
  min-height: 200px;
  position: relative;
`
const nav = styled.div `

`
const Carouselinner = styled.div `
  overflow: hidden;
`
//transform: ${trackMove ? 'translateX(-1040'}

const Cardcontainer = styled.ul`
  width: 260px;
  flex-shrink: 0;
  display: flex;
  height: 400px;
  padding-right: 15px;
  box-sizing: border-box;
  transition: transform 0.2s;
  &: hover{
    transform: scale(1.02)
  };
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const Next_Button = styled.button `
width: 60px;
height: 60px;
border-radius: 50%;
border: 1px solid #aaa;
position: absolute;
top: 50%;
transform: translateY(-50%);
right: -30px;
cursor: pointer;
`

const Prev_Button = styled.button `
width: 60px;
height: 60px;
border-radius: 50%;
border: 1px solid #aaa;
position: absolute;
top: 50%;
transform: translateY(-50%);
left: -30px;
cursor: pointer;
`

const Relateditems = ({product, reviews, styles, metaData, relatedProducts, setOutfit, outfit}) => {

  const [trackMove, settrackMove] = useState(0);
  const [outfitTrackMove, setOutfitTrackMove] = useState(0);
  const ref = useRef(null);

  const Carouseltrack = styled.div`
  display: flex;
  transform:  translateX(-${trackMove === 0 ? 0 : trackMove * ref.current.offsetWidth}px);
  transition: transform 0.3s;
`
  const CarouselOutfittrack = styled.div`
  display: flex;
  transform:  translateX(-${outfitTrackMove === 0 ? 0 : outfitTrackMove * 1040}px);
  transition: transform 0.3s;
`

  let relatedProductsUnique = relatedProducts.filter((v, i, a) => a.indexOf(v) === i)

  const trackMover = useCallback((input) => {
    if(input === 'next') {
      settrackMove((prevState) => prevState += 1);
    } else {
      settrackMove((prevState) => prevState -= 1);
    }
  }, [trackMove]);

  const outfitTrackMover = useCallback((input) => {
    if(input === 'next') {
      setOutfitTrackMove((prevState) => prevState += 1);
    } else {
      setOutfitTrackMove((prevState) => prevState -= 1);
    }
  }, [outfitTrackMove]);

  return (
    <Wrapper>
      <Carouselcontainer ref = {ref}>
      <Carouselinner>
      <Carouseltrack>
          {relatedProductsUnique ? relatedProductsUnique.map((item, index) => <Cardcontainer><Relatedcard key = {index} item = {item} currentProduct = {product} metaData = {metaData}/></Cardcontainer>)
          : <p>related products not found</p> }
      </Carouseltrack>
      </Carouselinner>
        <nav>
        {relatedProductsUnique.length > 4 && trackMove > 0 ? <Prev_Button onClick = {() => trackMover('prev')}>prev</Prev_Button> : null}
        {relatedProductsUnique.length > 4 && trackMove < (Math.floor(relatedProductsUnique.length/4)) ? <Next_Button onClick = {() => trackMover('next')}>next</Next_Button> : null}
        </nav>
      </Carouselcontainer>

      <Carouselcontainer ref = {ref}>
      <Carouselinner>
      <CarouselOutfittrack>
      {outfit.map((item,index) => item.add ? <Cardcontainer><OutfitAddCard
          key = {index}
          currentProduct = {product}
          setOutfit = {setOutfit}
          outfit = {outfit}
          styles = {styles}/> </Cardcontainer> :
          <Cardcontainer><Outfitcard key = {index}
          item = {item}
          metaData = {metaData}
          outfit = {outfit[index]}
          outfitStyle = {outfit.outfitStyle}
          /></Cardcontainer>)}
      </CarouselOutfittrack>
      </Carouselinner>
        <nav>
        {outfit.length > 4 && outfitTrackMove > 0 ? <Prev_Button onClick = {() => outfitTrackMover('prev')}>prev</Prev_Button> : null}
        {outfit.length > 4 && outfitTrackMove < (Math.floor(outfit.length/4)) ? <Next_Button onClick = {() => outfitTrackMover('next')}>next</Next_Button> : null}
        </nav>
      </Carouselcontainer>
    </Wrapper>
  );
};

export default Relateditems