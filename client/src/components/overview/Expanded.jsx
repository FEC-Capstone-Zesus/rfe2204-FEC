import { useState } from 'react';
import styled from "styled-components";

const MainImage = styled.div`
  height: 35rem;
  width: 70rem;
  background: rgba(226,226,226,100);
  background-image: ${({currentImage}) => (currentImage ? `url(${currentImage})` : "url('')")};
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
  &:hover {
    cursor: zoom-in;
  }
`
const ImageCarousel = styled.div`
  background: rgba(226,226,226,0.7);
  position: absolute;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 1.5rem;
  float: left;
  &:hover {
    cursor: default;
  }
`
const ImageIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1.2px solid;
  background: rgba(226,226,226,100);
  &:hover {
    cursor: pointer;
  }
`
const CarouselArrow = styled.div`
  background: rgba(0,0,0,0.2);
  border: 0.1px solid;
  border-color: rgba(0,0,0);
  width: 3.1rem;
  height: 1rem;
  &:hover {
    cursor: pointer;
  }
`
const ImageUnderline = styled.div`
  border: 2px solid rgba(0, 0, 0, 100);
  width: 2.9rem;
`
const ImageNoUnderline = styled.div`
  border: 2px solid rgba(0, 0, 0, 0);
  width: 2.9rem;
`
const HorizontalButtons = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  width: 38rem;
  padding-right: 3rem;
  padding-top: 16rem;
`
const ArrowContainer = styled.div`
  z-position: 1;
  width: 1rem;
  height: 3rem;
`
const ArrowLeft = styled.div`
  background: rgba(226,226,226,0.5);
  margin-left: 3rem;
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`
const ArrowRight = styled.div`
  background: rgba(226,226,226,0.5);
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`

var max = 0;

const Expanded = ( { mainImage, imagesArray, slice, changeMainImage, changeSlice } ) => {

  if (imagesArray.length) {
    max = imagesArray.length;
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== mainImage) {
      imagesArray.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          changeSlice([slice[0], slice[1], i]);
        }
      })
      changeMainImage(photo.thumbnail_url);
    }
  }

  const updateCarousel = (direction) => {
    if ((slice[0] > 0 && direction === 'up') || (slice[1] < max && direction === 'down')) {
      var newSlice = direction === 'down' ? [slice[0] + 1, slice[1] + 1] : [slice[0] - 1, slice[1] - 1];
      var newIndex = slice[2];

      if (imagesArray[slice[0]].thumbnail_url === mainImage && direction === 'down') {
        newIndex = slice[2] + 1;
        changeMainImage(imagesArray[slice[0] + 1].thumbnail_url);
      }

      if (imagesArray[slice[1] - 1].thumbnail_url === mainImage && direction === 'up') {
        newIndex = slice[2] - 1;
        changeMainImage(imagesArray[slice[1] - 2].thumbnail_url);
      }

      changeSlice([...newSlice, newIndex]);
    }
  }

  const horizontalClick = (direction) => {
    if ((slice[2] > 0 && direction === 'left') || (slice[2] < max - 1 && direction === 'right')) {
      var newIndex = direction === 'right' ? slice[2] + 1 : slice[2] - 1;

      if (imagesArray[slice[0]].thumbnail_url === mainImage && direction === 'left') {
        changeSlice([slice[0] - 1, slice[1] - 1, newIndex]);
      } else if (imagesArray[slice[1] - 1].thumbnail_url === mainImage && direction === 'right') {
        changeSlice([slice[0] + 1, slice[1] + 1, newIndex]);
      } else {
        changeSlice([slice[0], slice[1], newIndex]);
      }

      changeMainImage(imagesArray[newIndex].thumbnail_url);
    }
  }

  return (
    <MainImage currentImage={mainImage ? mainImage : ''}>
      <ImageCarousel>
        {imagesArray.length ? imagesArray.length > 7 ?
          <CarouselArrow onClick={() => updateCarousel('up') }>
            <div className='arrow up'
                 style={{ marginLeft: 1.3 + 'rem' }}></div>
          </CarouselArrow>
          : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
        <div>
          {imagesArray.length ? imagesArray.map((photo, i) => {
                return (
                  <div key={photo.thumbnail_url}>
                    <ImageIcon onClick={() => updateCurrentImage(photo)}>{i + 1}</ImageIcon>
                    <ImageNoUnderline />
                    {photo.thumbnail_url === mainImage ?
                      <ImageUnderline />
                      : <ImageNoUnderline /> }
                    <ImageNoUnderline />
                    {i < 6 ? <ImageNoUnderline /> : null}
                  </div>
                )})
           : null}
        </div>
        {imagesArray.length ? imagesArray.length > 7 ?
          <CarouselArrow onClick={() => updateCarousel('down') }>
            <div className='arrow down'
                 style={{ marginLeft: 1.3 + 'rem', marginBottom: 0.5 + 'rem' }}></div>
          </CarouselArrow>
          : null : null}
      </ImageCarousel>
      <HorizontalButtons>
        {slice[2] === 0 ? <ArrowContainer /> :
        <ArrowContainer onClick={() => horizontalClick('left')}>
          <ArrowLeft>←</ArrowLeft>
        </ArrowContainer>}
        {slice[2] === max - 1 ? <ArrowContainer /> :
        <ArrowContainer onClick={() => horizontalClick('right')}>
          <ArrowRight>→</ArrowRight>
        </ArrowContainer>}
      </HorizontalButtons>
    </MainImage>
  );
};

export default Expanded
