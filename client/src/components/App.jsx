import styled, { createGlobalStyle } from "styled-components";
import RatingsReviews from "./RatingsReviews.jsx";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: 'Inter', sans-serif;
  }
  h1 {
    color: blue;
  }
  h1.loading {
    color: black;
  }
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

const Container = styled.div`
  background: rgba(250,250,250,0);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;


const App = ({ loading, product, reviews, styles, metaData, questions, relatedProducts }) => {

  return (
    <>
      <GlobalStyle />
      <RatingsReviews />
    </>
  );
};

export default App
