import { useState } from 'react';
import styled from "styled-components";

const MainImage = styled.div`
  width: 45rem;
  height: 35rem;
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
  margin-top: 2rem;
  margin-left: 1.5rem;
  float: left;
  &:hover {
    cursor: default;
  }
`
const ImageThumbnail = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1.2px solid;
  background: rgba(226,226,226,100);
  background-image: ${({currentThumbnail}) => (currentThumbnail ? `url(${currentThumbnail})` : "url('')")};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
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

var imageIndex = 0;
var max = 0;

const ImageGallery = ( { mainImage, imagesArray, changeMainImage } ) => {

  if (imagesArray.length) {
    max = imagesArray.length;
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== mainImage) {
      imagesArray.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          imageIndex = i;
        }
      })
      changeMainImage(photo.thumbnail_url);
    }
  }

  const updateCarousel = (direction) => {
    if ((start > 0 && direction === 'up') || (end < max && direction === 'down')) {
      direction === 'down' ? setStart(start + 1) : setStart(start - 1);
      direction === 'down' ? setEnd(end + 1) : setEnd(end - 1);

      if (imagesArray[start].thumbnail_url === mainImage && direction === 'down') {
        imageIndex++;
        changeMainImage(imagesArray[start + 1].thumbnail_url);
      }

      if (imagesArray[end].thumbnail_url === mainImage && direction === 'up') {
        imageIndex--;
        changeMainImage(imagesArray[end - 1].thumbnail_url);
      }
    }
  }

  const horizontalClick = (direction) => {
    if ((imageIndex > 0 && direction === 'left') || (imageIndex < max - 1 && direction === 'right')) {
      imageIndex = direction === 'right' ? imageIndex + 1 : imageIndex - 1;
      console.log('start: ', start);
      console.log('end: ', end);
      console.log('imagesArray[start]: ', imagesArray[start]);
      console.log('imagesArray[end]: ', imagesArray[end]);
      console.log('mainImage: ', mainImage);
      if (imagesArray[start].thumbnail_url === mainImage && direction === 'left') {
        setStart(start - 1);
        setEnd(end - 1);
      }

      if (imagesArray[end - 1].thumbnail_url === mainImage && direction === 'right') {
        setStart(start + 1);
        setEnd(end + 1);
      }

      changeMainImage(imagesArray[imageIndex].thumbnail_url);

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
          {imagesArray.length ? imagesArray.slice(start, end).map((photo, i) => {
                return (
                  <div key={photo.thumbnail_url}>
                    <ImageThumbnail onClick={() => updateCurrentImage(photo)}
                                    currentThumbnail={photo.thumbnail_url}/>
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
        <ArrowContainer onClick={() => horizontalClick('left')}>
          <ArrowLeft>←</ArrowLeft>
        </ArrowContainer>
        <ArrowContainer onClick={() => horizontalClick('right')}>
          <ArrowRight>→</ArrowRight>
        </ArrowContainer>
      </HorizontalButtons>
    </MainImage>
  );
};

export default ImageGallery
