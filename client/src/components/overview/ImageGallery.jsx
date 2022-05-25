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
  margin-left: 1rem;
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

var start = 0;
var end = 7;
var imageIndex = 0;

const ImageGallery = ( { currentStyle } ) => {

  if (currentStyle) {
    var [currentImage, changeImage] = useState(currentStyle.photos[0].thumbnail_url);
    var [photosCarousel, changePhotosCarousel] = useState(currentStyle.photos.slice(start, end));
    var max = currentStyle.photos.length;
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== currentImage) {
      currentStyle.photos.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          imageIndex = i;
        }
      })
      changeImage(photo.thumbnail_url);
    }
  }

  const updateCarousel = (direction) => {
    if ((start > 0 && direction === 'up') || (end < max && direction === 'down')) {
      start = direction === 'down' ? start + 1 : start - 1;
      end = direction === 'down' ? end + 1 : end - 1;

      var photosArray = currentStyle.photos.slice(start, end);

      if (photosCarousel[0].thumbnail_url === currentImage && direction === 'down') {
        imageIndex++;
        changeImage(photosCarousel[1].thumbnail_url);
      }

      if (photosCarousel[6].thumbnail_url === currentImage && direction === 'up') {
        imageIndex--;
        changeImage(photosCarousel[5].thumbnail_url);
      }

      changePhotosCarousel(photosArray);
    }
  }

  const horizontalClick = (direction) => {
    if ((imageIndex > 0 && direction === 'left') || (imageIndex < max - 1 && direction === 'right')) {
      imageIndex = direction === 'right' ? imageIndex + 1 : imageIndex - 1;

      if (photosCarousel[0].thumbnail_url === currentImage && direction === 'left') {
        start--;
        end--;
        var photosArray = currentStyle.photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      if (photosCarousel[6].thumbnail_url === currentImage && direction === 'right') {
        start++;
        end++;
        var photosArray = currentStyle.photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      changeImage(currentStyle.photos[imageIndex].thumbnail_url);

    }
  }

  return (
    <MainImage currentImage={currentImage}>
      <ImageCarousel>
        {currentStyle ? currentStyle.photos.length > 7 ?
          <CarouselArrow onClick={() => updateCarousel('up') }>
            <div className='arrow up'
                 style={{ marginLeft: 1.3 + 'rem' }}></div>
          </CarouselArrow>
          : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
        <div>
          {currentStyle ?
            photosCarousel.map(photo => {
                return (
                  <div key={photo.thumbnail_url}>
                    <ImageThumbnail onClick={() => updateCurrentImage(photo)}
                                    currentThumbnail={photo.thumbnail_url}/>
                    <ImageNoUnderline />
                    {photo.thumbnail_url === currentImage ?
                      <ImageUnderline />
                      : <ImageNoUnderline /> }
                    <ImageNoUnderline />
                    <ImageNoUnderline />
                  </div>
                )
            })
            : null}
        </div>
        {currentStyle ? currentStyle.photos.length > 7 ?
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
