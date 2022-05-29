import { useState } from 'react';
import styled from "styled-components";
import ImageGallery from './ImageGallery.jsx';
import RatingsAndStyles from './RatingsAndStyles.jsx';
import ImageGalleryContainer from '../../containers/overview/ImageGalleryContainer.js';
import RatingsAndStylesContainer from '../../containers/overview/RatingsAndStylesContainer.js';
import ExpandedContainer from '../../containers/overview/ExpandedContainer.js';


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

const Overview = ( { product, styles, currentStyle, reviews, metaData, changeCurrentStyle } ) => {
  var [expanded, setExpanded] = useState(true);

  return (
    <>
      <div className='overview-container'>
        <ImagesStylesContainer>
          {expanded ?
             <>
              <ImageGalleryContainer />
              <RatingsAndStylesContainer />
             </>
             :
             <ExpandedContainer />
          }
        </ImagesStylesContainer>
      </div>
    </>
  );
};

export default Overview
