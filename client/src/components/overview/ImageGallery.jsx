import { useState } from 'react';
import styled from "styled-components";

// Change these styled divs. Keeping here to remember syntax.
const ImageUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 3rem;
`
const ImageNoUnderline = styled.div`
  border: 1px solid rgba(0, 0, 0, 0);
  width: 3rem;
`

const ImageCarousel = styled.div`
  position: absolute;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
  background: rgba(226,226,226,0.5);
  float: 'left';
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
    <div className='main-image' style={{ width: 45 + 'rem', height: 35 + 'rem',
                                         background: 'rgba(226,226,226,100)',
                                         backgroundImage: `url(${currentImage})`,
                                         backgroundRepeat: 'no-repeat',
                                         backgroundOrigin: 'content-box',
                                         backgroundSize: 75 + '%',
                                         backgroundPosition: 'center' }} >
      <div className='image-carousel'
            style={{ position: 'absolute',
                     marginTop: 2.5 + 'rem',
                     marginLeft: 1.5 + 'rem',
                     background: 'rgba(226,226,226,0.5)',
                     float: 'left' }}>
        {currentStyle ? styles.results[0].photos.length > 7 ?
          <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}
               onClick={() => updateCarousel('up') }>
            <div className='arrow up'
                 style={{ marginLeft: 1.3 + 'rem' }}></div>
          </div>
          : null : null}
        <ImageNoUnderline />
        <div>
          {currentStyle ?
            photosCarousel.map(photo => {
                return (
                  <div key={photo.thumbnail_url}>
                    <div onClick={() => updateCurrentImage(photo)}
                          style={{ width: 3 + 'rem', height: 3 + 'rem',
                                   background: 'rgba(226,226,226,100)',
                                   backgroundImage: `url(${photo.thumbnail_url})`,
                                   backgroundSize: 'contain',
                                   border: '1px solid',
                                   backgroundRepeat: 'no-repeat',
                                   backgroundPosition: 'center' }}>
                    </div>
                    <ImageNoUnderline />
                    {photo.thumbnail_url === currentImage ?
                      <ImageUnderline />
                      : <ImageNoUnderline /> }
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
      </div>
      <HorizontalButtons>
        <div style={{ width: 1 + 'rem', height: 3 + 'rem' }}
             onClick={() => horizontalClick('left')}>
          {/* <div style={{ marginLeft: 1 + 'rem',
                        fontSize: 30 + 'px' }}>←</div> */}
          <ArrowLeft>←</ArrowLeft>
        </div>
        <div style={{ width: 1 + 'rem', height: 3 + 'rem' }}
             onClick={() => horizontalClick('right')}>
          {/* <div style={{ marginRight: 2 + 'rem',
                        fontSize: 30 + 'px' }}>→</div> */}
          <ArrowRight>→</ArrowRight>
        </div>
      </HorizontalButtons>
    </div>
  );
};

export default ImageGallery
