import styled from "styled-components";
import ImageGallery from './ImageGallery.jsx';
import RatingsAndStyles from './RatingsAndStyles.jsx';
import ImageGalleryContainer from '../../containers/overview/ImageGalleryContainer.js';
import RatingsAndStylesContainer from '../../containers/overview/RatingsAndStylesContainer.js';
import ExpandedViewContainer from '../../containers/overview/ExpandedViewContainer.js';
import ShareButtons from './ShareButtons.jsx';


const ImagesStylesContainer = styled.div`
  width: 75rem;
  display: flex;
`
const ImagesGalleryHoverDiv = styled.div`
  width: 50rem;
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
      <ShareButtons/>
    </>
  );
};

export default Overview
