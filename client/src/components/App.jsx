import styled, { createGlobalStyle } from "styled-components";

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
  h1.fetching {
    color: black;
  }
  `;

const Modal = styled.div`
  z-index: auto;
  display: ${({loading}) => (loading ? 'block' : 'none')};
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

const App = ( { loading, product, reviews, styles, metaData, questions, relatedProducts } ) => {

  return (
    <>
      <GlobalStyle />
      <Modal loading={loading} >
        <Container>
          <h1 className='fetching' >Loading...</h1>
        </Container>
      </Modal>
      <h1>Hello World!!!!!</h1>
      {product.id ? <p>{ JSON.stringify(product)}</p> : null}
      {reviews.product ? <p>{ JSON.stringify(reviews)}</p> : null}
      {styles.product_id ? <p>{ JSON.stringify(styles)}</p> : null}
      {metaData.product_id ? <p>{ JSON.stringify(metaData)}</p> : null}
      {questions.length ? <p>{ JSON.stringify(questions)}</p> : null}
      {relatedProducts.length ? <p>{ JSON.stringify(relatedProducts)}</p> : null}
    </>
  );
};

export default App
