import { useState } from 'react';
import styled from "styled-components";
import { updateCarousel, horizontalClick } from './helperFuncs.js';


const ExpandedDiv = styled.div`
  margin-bottom: 4rem;
  height: 35rem;
  width: 80rem;
  background: rgba(226,226,226,100);
  display: flex;
`
const MainImageContainer = styled.div`
  height: 35rem;
  width: 65rem;
  overflow: hidden;
  background-image: ${({currentImage}) => (currentImage ? `url(${currentImage})` : "url('')")};
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  background-size: ${({zoomed}) => (zoomed ? `250%` : 'contain')};
  &:hover {
    cursor: ${({zoomed}) => (zoomed ? `url('/assets/minus-cursor.png') 0 8, auto` : 'crosshair')};
  }
`
MainImageContainer.defaultProps = {
  alt: ''
}
const CarouselDiv = styled.div`
  height: 35rem;
  width: 5rem;
  background: rgba(226,226,226,100);
`
const ImageCarousel = styled.div`
  background: rgba(226,226,226,0.7);
  position: absolute;
  display: inline-block;
  margin-left: 1.5rem;
  &:hover {
    cursor: default;
  }
`
const ImageIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1.2px solid;
  background: rgba(226,226,226,100);
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`
ImageIcon.defaultProps = {
  alt: ''
}
const CarouselArrow = styled.div`
  background: rgba(0,0,0,0.2);
  border: 0.1px solid;
  border-color: rgba(0,0,0);
  width: 2.1rem;
  height: 0.75rem;
  &:hover {
    cursor: pointer;
  }
`
const ImageUnderline = styled.div`
  border: 2px solid rgba(0, 0, 0, 100);
  width: 1.9rem;
`
const ImageNoUnderline = styled.div`
  border: 2px solid rgba(0, 0, 0, 0);
  width: 1.9rem;
`
const HorizontalButtons = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  width: 65rem;
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
const ExitExpanded = styled.div`
  float: left;
  width: 3rem;
  height: 1rem;
  margin-top: -19rem;
  background: rgba(226,226,226,0.5);
  position: relative;
  left: 95.5%;
  &:hover {
    cursor: pointer;
  }
`

var max = 0;
var iconArray = [];

const Expanded = ( { mainImage, imagesArray, slice, changeMainImage, changeSlice, toggleExpanded } ) => {
  var [zoomed, toggleZoom] = useState(false);

  if (imagesArray.length) {
    max = imagesArray.length;
    iconArray = imagesArray.map((x, i) => {
      return { photo: x,
               value: i + 1}
    });
  }

  const updateCurrentImage = (photo) => {
    if (photo.url !== mainImage) {
      imagesArray.forEach((currentPhoto, i) => {
        if (currentPhoto.url === photo.url) {
          if (i > 6) {
            changeSlice([i - 6, i + 1, i]);
          } else {
            changeSlice([slice[0], slice[1], i]);
          }
        }
      })
      changeMainImage(photo.url);
    }
  }

  const carouselClick = (e, direction) => {
    updateCarousel(e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice);
  }

  const leftRightClick = (e, direction) => {
    horizontalClick(e, direction, imagesArray, mainImage, max, slice, changeMainImage, changeSlice)
  }

  const zoom = (e) => {
    var container = document.getElementById('imageContainer');

    if (zoomed) {
      toggleZoom(!zoomed);
      container.style.backgroundPosition = 'center';
    } else {
      toggleZoom(!zoomed);

      moveImage(e, container);
    }
  }

  const moveOnZoom = (e) => {
    if (zoomed) {
      var container = document.getElementById('imageContainer');

      moveImage(e, container);
    }
  }

  const moveImage = (event, element) => {
    var x = 0
    var y = 0
    var xPerc = 0
    var yPerc = 0
    var xPix = 0
    var yPix = 0;

    var a = element.getBoundingClientRect();

    x = event.pageX - a.left;
    y = event.pageY - a.top;

    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    xPerc = x / 1040;
    yPerc = y / 560;

    element.style.backgroundPosition = "" + (xPerc * 100) + "% " + (yPerc * 100) + "%";
  }

  return (
    <ExpandedDiv id='expanded' >
      <CarouselDiv>
        <ImageCarousel >
          {iconArray.length ? iconArray.length > 11 ?
            <CarouselArrow onClick={(e) => carouselClick(e, 'up') }>
              <div className='arrow up'
                    style={{ marginLeft: 0.75 + 'rem', marginBottom: 0.15 + 'rem' }}></div>
            </CarouselArrow>
            : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
          <div>
            {iconArray.length ? iconArray.slice(Math.max(slice[0] - 4, 0), slice[1] + 4).map((icon, i) => {
                  return (
                    <div key={icon.photo.thumbnail_url}>
                      <ImageIcon data-testid={icon.photo.thumbnail_url}
                                 alt={`Image icon ${icon.value}`}
                                 onClick={() => updateCurrentImage(icon.photo)}>
                        <p style={{ marginTop: 7 + 'px' }}>{icon.value}</p>
                      </ImageIcon>
                      <ImageNoUnderline />
                      {icon.photo.url === mainImage ?
                        <ImageUnderline />
                        : <ImageNoUnderline /> }
                      <ImageNoUnderline />
                      {i < 6 ? <ImageNoUnderline /> : null}
                    </div>
                  )})
              : null}
          </div>
          {iconArray.length ? iconArray.length > 11 ?
            <CarouselArrow onClick={(e) => carouselClick(e, 'down') }>
              <div className='arrow down'
                    style={{ marginLeft: 0.75 + 'rem', marginBottom: 0.5 + 'rem' }}></div>
            </CarouselArrow>
            : null : null}
        </ImageCarousel>
      </CarouselDiv>
      <MainImageContainer id='imageContainer'
                          data-testid='imageContainer'
                          zoomed={zoomed}
                          alt="Main image of product"
                          onClick={(e) => zoom(e)}
                          onMouseMove={(e) => moveOnZoom(e)}
                          currentImage={mainImage ? mainImage : ''} >
          <HorizontalButtons>
            {slice[2] === 0 ? <ArrowContainer /> :
            <ArrowContainer id='expandedLeft'
                            data-testid='expandedLeftContainer'
                            onClick={(e) => leftRightClick(e, 'left')}>
              <ArrowLeft data-testid='expandedLeft' >←</ArrowLeft>
            </ArrowContainer>}
            {slice[2] === max - 1 ? <ArrowContainer /> :
            <ArrowContainer id='expandedRight'
                            data-testid='expandedRightContainer'
                            onClick={(e) => leftRightClick(e, 'right')}>
              <ArrowRight data-testid='expandedRight' >→</ArrowRight>
            </ArrowContainer>}
          </HorizontalButtons>
          <ExitExpanded onClick={(e) => { toggleExpanded(false); e.stopPropagation(); }}>
            <div data-testid='Exit' >Close</div>
          </ExitExpanded>
      </MainImageContainer>
    </ExpandedDiv>
  );
};

export default Expanded
