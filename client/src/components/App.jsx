import styled, { createGlobalStyle } from "styled-components";
import RatingsReviewsContainer from "../containers/RatingsReviewsContainer.js";
import OverviewContainer from "../containers/overview/OverviewContainer.js";
import Summary from './overview/Summary.jsx';
import RelateditemsContainer from "../containers/RelateditemsContainer.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin-left: 10rem;
    margin-right 12rem;
    padding: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
  a.reviews {
    color: black;
  }
  select {
    border: 1px solid rgba(0, 0, 0, 100);
    border-radius: 0;
    height: 3rem;
    font-weight: bold;
    &:focus {
      outline: none
    }
  }
  button {
    border: 1px solid rgba(0, 0, 0, 100);
    border-radius: 0;
    background: white;
    height: 3rem;
    &:active:hover {
      background: black;
      color: white;
    }
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }
  .right {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .left {
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }
  .up {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

const SubOverview = styled.div`
  width: 55rem;
  margin-left: 7rem;
  margin-right 7rem;
  padding: 0;
`;

const Modal = styled.div`
  z-index: auto;
  display: ${({ loading }) => (loading ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(250,250,250,0.5);
`;

const Loading = styled.div`
  background: rgba(250,250,250,0);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Headline = styled.div`
  width: 75rem;
  height: 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const HeadlineSpan = styled.span`
  margin-top: 0.5rem;
  font-size: 0.8em;
  font-weight: ${({ bold }) => (bold ? 'bold' : '')};
  font-style: ${({ italic }) => (italic ? 'italic' : '')};
  text-decoration:${({ underline }) => (underline ? 'underline' : '')};
`

const Header = styled.header`
  background: rgba(226,226,226,100);
  margin-top: -0.5rem;
  width: 75rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 9rem;
  display: inline-block;
`

const App = ( { loading, product, reviews, styles, metaData, questions, relatedProducts } ) => {

  return (
    <>
      <GlobalStyle />
        <Modal loading={loading} >
          <Loading>
            <h1 className='loading' >Loading...</h1>
          </Loading>
        </Modal>
        <Header>
          <img style={{ marginTop: 1.3 + 'rem',
                        marginLeft: 0.5 + 'rem',
                        height: 3 + 'rem',
                        width: 7.5 + 'rem' }}src='/assets/Zeus_Logo.png'></img>
          <div>
            <SearchBar />
            <img style={{ marginTop: 2 + 'rem',
                          marginRight: 0.5 + 'rem',
                          height: 1.5 + 'rem',
                          width: 1.5 + 'rem' }}src='/assets/magnifying_glass.png'></img>
          </div>
        </Header>
        {!loading ?
        <>
          <Headline>
            <HeadlineSpan italic={true} >SITE-WIDE ANNOUNCEMENT MESSAGE!</HeadlineSpan>
            &nbsp;
            <HeadlineSpan>--</HeadlineSpan>
            &nbsp;
            <HeadlineSpan>SALE / DISCOUNT</HeadlineSpan>
            &nbsp;
            <HeadlineSpan bold={true}>OFFER</HeadlineSpan>
            &nbsp;
            <HeadlineSpan>--</HeadlineSpan>
            &nbsp;
            <HeadlineSpan underline={true}>NEW PRODUCT HIGHLIGHT</HeadlineSpan>
          </Headline>
          <OverviewContainer />
          <SubOverview>
          <Summary product={product} />
          <RelateditemsContainer />
          <a id='allRatings'>
            <RatingsReviewsContainer/>
          </a>
          </SubOverview>
        </>
        : null}
    </>
  );
};

export default App
