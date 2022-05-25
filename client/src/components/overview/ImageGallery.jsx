import { useState } from 'react';
import styled from "styled-components";

// Change these styled divs. Keeping here to remember syntax.
const MainImage = styled.div`
  width: 45rem;
  height: 35rem;
  background: rgba(226,226,226,100);
  background-image: ${({currentImage}) => (currentImage ? `url(${currentImage})` : "url('')")};
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: 75%;
  background-position: center;
`
const ImageCarousel = styled.div`
  position: absolute;
  margin-top: 2.5rem;
  margin-left: 1.5rem;
  background: rgba(226,226,226,0.5);
  float: left;
`
const ImageThumbnail = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid;
  background: rgba(226,226,226,100);
  background-image: ${({currentThumbnail}) => (currentThumbnail ? `url(${currentThumbnail})` : "url('')")};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`
const ImageUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 3rem;
`
const ImageNoUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 3rem;
`
const HorizontalButtons = styled.div`
  float: 'right';
  display: flex;
  justify-content: space-between;
  padding-right: 1.5rem;
`
const ArrowLeft = styled.div`
  margin-left: 1rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`
const ArrowRight = styled.div`
  margin-right: 1rem;
  font-size: 30px;
  &:hover {
    cursor: pointer;
  }
`

var start = 0;
var end = 7;
var imageIndex = 0;

const ImageGallery = ( { styles } ) => {

  if (styles.product_id) {
    var [currentStyle, changeStyle] = useState(styles.results[0]);
    var [currentImage, changeImage] = useState(styles.results[0].photos[0].thumbnail_url);
    var [photosCarousel, changePhotosCarousel] = useState(styles.results[0].photos.slice(0, 7));
    var max = styles.results[0].photos.length;
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== currentImage) {
      styles.results[0].photos.forEach((currentPhoto, i) => {
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

      var photosArray = styles.results[0].photos.slice(start, end);

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
        var photosArray = styles.results[0].photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      if (photosCarousel[6].thumbnail_url === currentImage && direction === 'right') {
        start++;
        end++;
        var photosArray = styles.results[0].photos.slice(start, end);
        changePhotosCarousel(photosArray);
      }

      changeImage(styles.results[0].photos[imageIndex].thumbnail_url);

    }
  }

  return (
    <MainImage currentImage={currentImage}>
      <ImageCarousel>
        {currentStyle ? styles.results[0].photos.length > 7 ?
          <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}
               onClick={() => updateCarousel('up') }>
            <div className='arrow up'
                 style={{ marginLeft: 1.3 + 'rem' }}></div>
          </div>
          : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
        <ImageNoUnderline />
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
        {currentStyle ? styles.results[0].photos.length > 7 ?
          <div style={{ width: 3 + 'rem', height: 1 + 'rem' }}
               onClick={() => updateCarousel('down') }>
            <div className='arrow down'
                 style={{ marginLeft: 1.3 + 'rem'}}></div>
          </div>
          : null : null}
      </ImageCarousel>
      <HorizontalButtons>
        <div style={{ width: 1 + 'rem', height: 3 + 'rem' }}
             onClick={() => horizontalClick('left')}>
          <ArrowLeft>←</ArrowLeft>
        </div>
        <div style={{ width: 1 + 'rem', height: 3 + 'rem' }}
             onClick={() => horizontalClick('right')}>
          <ArrowRight>→</ArrowRight>
        </div>
      </HorizontalButtons>
    </MainImage>
  );
};

export default ImageGallery
