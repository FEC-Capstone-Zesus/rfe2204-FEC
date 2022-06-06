import styled from "styled-components";
import { updateCarousel, horizontalClick } from './helperFuncs.js';

const MainImage = styled.div`
  width: 50rem;
  height: 35rem;
  background: rgba(226,226,226,1);
  background-image: ${({currentImage}) => (currentImage ? `url(${currentImage})` : "url('')")};
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: contain;
  background-position: center;
`
MainImage.defaultProps = {
  alt: ''
}
const ImageCarousel = styled.div`
  background: rgba(226,226,226,0.7);
  position: absolute;
  margin-top: 2rem;
  margin-left: 1.5rem;
  float: left;
  cursor: default;
`
const ImageThumbnail = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1.2px solid;
  background: rgba(226,226,226,1);
  background-image: ${({currentThumbnail}) => (currentThumbnail ? `url(${currentThumbnail})` : "url('')")};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
`
ImageThumbnail.defaultProps = {
  alt: ''
}
const CarouselArrow = styled.div`
  background: rgba(0,0,0,0.2);
  border: 0.1px solid;
  border-color: rgba(0,0,0);
  width: 3.1rem;
  height: 1rem;
  cursor: pointer;
`
const ImageUnderline = styled.div`
  border: 2px solid rgba(0, 0, 0, 1);
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
  width: 42rem;
  padding-right: 3rem;
  padding-top: 16rem;
`
const ArrowContainer = styled.div`
  width: 1rem;
  height: 3rem;
`
const ArrowLeft = styled.div`
  background: rgba(226,226,226,0.5);
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  cursor: pointer;
`
const ArrowRight = styled.div`
  background: rgba(226,226,226,0.5);
  padding-left: 1rem;
  width: 3rem;
  font-size: 30px;
  cursor: pointer;
`

var max = 0;

const ImageGallery = ( { mainImage, imagesArray, slice, changeMainImage, changeSlice } ) => {

  if (imagesArray.length) {
    max = imagesArray.length;
  }
  const stopParentOnClick = (e) => {
    e.stopPropagation();
  }

  const updateCurrentImage = (e, photo) => {
    if (photo.url !== mainImage) {
      imagesArray.forEach((currentPhoto, i) => {
        if (currentPhoto.url === photo.url) {
          changeSlice([slice[0], slice[1], i]);
        }
      })
      changeMainImage(photo.url);
    }
    e.stopPropagation();
  }

  const carouselClick = (e, direction) => {
    updateCarousel(e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice);
  }

  const leftRightClick = (e, direction) => {
    horizontalClick(e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice)
  }

  return (
    <MainImage id='mainImage' alt='Main image of product' currentImage={mainImage ? mainImage : '/assets/no-image.png'}>
      <ImageCarousel data-testid='imageCarousel' onClick={(e) => stopParentOnClick(e)}>
        {imagesArray.length ? imagesArray.length > 7 ?
          <CarouselArrow id='carouselUp'
                         data-testid='carouselUp'
                         onClick={(e) => carouselClick(e, 'up') }>
            <div className='arrow up'
                 style={{ marginLeft: 1.25 + 'rem' }}></div>
          </CarouselArrow>
          : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
        <div>
          {imagesArray.length ? imagesArray.slice(slice[0], slice[1]).map((photo, i) => {
                return (
                  <div key={photo.thumbnail_url}>
                    <ImageThumbnail data-testid={photo.thumbnail_url}
                                    alt={`Thumbnail image ${i + 1}`}
                                    onClick={(e) => updateCurrentImage(e, photo)}
                                    currentThumbnail={photo.thumbnail_url ? photo.thumbnail_url : '/assets/no-image.png'}/>
                    <ImageNoUnderline />
                    {photo.url === mainImage ?
                      <ImageUnderline />
                      : <ImageNoUnderline /> }
                    <ImageNoUnderline />
                    {i < 6 ? <ImageNoUnderline /> : null}
                  </div>
                )})
           : null}
        </div>
        {imagesArray.length ? imagesArray.length > 7 ?
          <CarouselArrow id='carouselDown'
                         data-testid='carouselDown'
                         onClick={(e) => carouselClick(e, 'down') }>
            <div className='arrow down'
                 style={{ marginLeft: 1.25 + 'rem', marginBottom: 0.5 + 'rem' }}></div>
          </CarouselArrow>
          : null : null}
      </ImageCarousel>
      <HorizontalButtons data-testid='horizontalContainer' >
        {slice[2] === 0 ? <ArrowContainer data-testid='galleryLeftContainerEmpty' /> :
        <ArrowContainer id='galleryLeft'
                        data-testid='galleryLeftContainer'
                        onClick={(e) => leftRightClick(e, 'left')}>
          <ArrowLeft data-testid='galleryLeft' >←</ArrowLeft>
        </ArrowContainer>}
        {slice[2] === max - 1 ? <ArrowContainer data-testid='galleryRightContainerEmpty' /> :
        <ArrowContainer id='galleryRight'
                        data-testid='galleryRightContainer'
                        onClick={(e) => leftRightClick(e, 'right')}>
          <ArrowRight data-testid='galleryRight' >→</ArrowRight>
        </ArrowContainer>}
      </HorizontalButtons>
    </MainImage>
  );
};

export default ImageGallery
