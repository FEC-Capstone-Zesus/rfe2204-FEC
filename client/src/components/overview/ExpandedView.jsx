import { useState } from 'react';
import styled from "styled-components";


const ExpandedDiv = styled.div`
  height: 35rem;
  width: 70rem;
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
  width: 1rem;
  height: 1rem;
  margin-top: -19rem;
  background-color: white;
  position: relative;
  text-align: center;
  left: 98.5%;
  &:hover {
    cursor: pointer;
  }
`

var max = 0;
var iconArray = [];

const Expanded = ( { mainImage, imagesArray, slice, changeMainImage, changeSlice, toggleExpanded } ) => {
  var [zoomed, toggleZoom] = useState(false);
  var container = document.getElementById('imageContainer');

  var cx, cy;
  var i = new Image();
  i.src = mainImage ? mainImage : '';
  i.onload = function() {
    cx = ((1040 * 2.5) / this.width) * this.width;
    cy = ((1040 * 2.5) / this.width) * this.height;
  }

  if (imagesArray.length) {
    max = imagesArray.length;
    iconArray = imagesArray.map((x, i) => {
      return { photo: x,
               value: i + 1}
    });
  }

  const updateCurrentImage = (photo) => {
    if (photo.thumbnail_url !== mainImage) {
      imagesArray.forEach((currentPhoto, i) => {
        if (currentPhoto.thumbnail_url === photo.thumbnail_url) {
          if (i > 6) {
            changeSlice([i - 6, i + 1, i]);
          } else {
            changeSlice([slice[0], slice[1], i]);
          }
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

  const horizontalClick = (e, direction) => {
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
    e.stopPropagation();

  }

  const zoom = (e) => {
    var container = document.getElementById('imageContainer');

    if (zoomed) {
      toggleZoom(!zoomed);
      container.style.backgroundPosition = 'center';
    } else {
      toggleZoom(!zoomed);

      var x = 0
      var y = 0
      var xPerc = 0
      var yPerc = 0
      var xPix = 0
      var yPix = 0;

      var a = container.getBoundingClientRect();

      x = e.pageX - a.left;
      y = e.pageY - a.top;

      x = x - window.pageXOffset;
      y = y - window.pageYOffset;

      xPerc = x / 1040;
      yPerc = y / 560;

      xPix = xPerc * (cx - 1040);
      yPix = yPerc * (cy - 560);

      container.style.backgroundPosition = "-" + xPix + "px -" + yPix + "px";
    }
  }

  const moveZoom = (e) => {
    if (zoomed) {

      var x = 0
      var y = 0
      var xPerc = 0
      var yPerc = 0
      var xPix = 0
      var yPix = 0;

      var a = container.getBoundingClientRect();

      x = e.pageX - a.left;
      y = e.pageY - a.top;

      x = x - window.pageXOffset;
      y = y - window.pageYOffset;

      xPerc = x / 1040;
      yPerc = y / 560;

      xPix = xPerc * (cx - 1040);
      yPix = yPerc * (cy - 560);

      container.style.backgroundPosition = "-" + xPix + "px -" + yPix + "px";
    }
  }

  return (
    <ExpandedDiv>
      <CarouselDiv>
        <ImageCarousel >
          {iconArray.length ? iconArray.length > 11 ?
            <CarouselArrow onClick={() => updateCarousel('up') }>
              <div className='arrow up'
                    style={{ marginLeft: 0.75 + 'rem', marginBottom: 0.15 + 'rem' }}></div>
            </CarouselArrow>
            : <div style={{ width: 3 + 'rem', height: 1 + 'rem'}}></div> : null}
          <div>
            {iconArray.length ? iconArray.slice(Math.max(slice[0] - 4, 0), slice[1] + 4).map((icon, i) => {
                  return (
                    <div key={icon.photo.thumbnail_url}>
                      <ImageIcon onClick={() => updateCurrentImage(icon.photo)}>
                        <p style={{ marginTop: 7 + 'px' }}>{icon.value}</p>
                      </ImageIcon>
                      <ImageNoUnderline />
                      {icon.photo.thumbnail_url === mainImage ?
                        <ImageUnderline />
                        : <ImageNoUnderline /> }
                      <ImageNoUnderline />
                      {i < 6 ? <ImageNoUnderline /> : null}
                    </div>
                  )})
              : null}
          </div>
          {iconArray.length ? iconArray.length > 11 ?
            <CarouselArrow onClick={() => updateCarousel('down') }>
              <div className='arrow down'
                    style={{ marginLeft: 0.75 + 'rem', marginBottom: 0.5 + 'rem' }}></div>
            </CarouselArrow>
            : null : null}
        </ImageCarousel>
      </CarouselDiv>
      <MainImageContainer id='imageContainer'
                          zoomed={zoomed}
                          onClick={(e) => zoom(e)}
                          onMouseMove={(e) => moveZoom(e)}
                          currentImage={mainImage ? mainImage : ''} >
          <HorizontalButtons>
            {slice[2] === 0 ? <ArrowContainer /> :
            <ArrowContainer onClick={(e) => horizontalClick(e, 'left')}>
              <ArrowLeft>←</ArrowLeft>
            </ArrowContainer>}
            {slice[2] === max - 1 ? <ArrowContainer /> :
            <ArrowContainer onClick={(e) => horizontalClick(e, 'right')}>
              <ArrowRight>→</ArrowRight>
            </ArrowContainer>}
          </HorizontalButtons>
          <ExitExpanded onClick={(e) => { toggleExpanded(false); e.stopPropagation(); }}>
            <div>X</div>
          </ExitExpanded>
      </MainImageContainer>
    </ExpandedDiv>
  );
};

export default Expanded
