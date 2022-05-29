import { useState } from 'react';
import styled from "styled-components";
import ImageGallery from './ImageGallery.jsx';
import RatingsAndStyles from './RatingsAndStyles.jsx';
import ImageGalleryContainer from '../../containers/overview/ImageGalleryContainer.js';
import RatingsAndStylesContainer from '../../containers/overview/RatingsAndStylesContainer.js';
import ExpandedViewContainer from '../../containers/overview/ExpandedViewContainer.js';


const OverviewDIV = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`
const ImagesStylesContainer = styled.div`
  display: flex;
`
const ImagesGalleryHoverDiv = styled.div`
  width: 45rem;
  height: 35rem;
  &:hover {
    cursor: zoom-in;
  }
`

const Overview = ( { expanded, toggleExpanded } ) => {

  function clickImage (e) {
    toggleExpanded(true);
  }

  return (
    <>
      <ImagesStylesContainer>
        {expanded ?
            <ExpandedViewContainer />
            :
            <>
            <ImagesGalleryHoverDiv onClick={(e) => clickImage(e)}>
              <ImageGalleryContainer />
            </ImagesGalleryHoverDiv>
            <RatingsAndStylesContainer />
          </>
        }
      </ImagesStylesContainer>
    </>
  );
};

export default Overview
