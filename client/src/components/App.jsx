import styled, { createGlobalStyle } from "styled-components";
import OverviewContainer from "../containers/overview/OverviewContainer.js";

const GlobalStyle = createGlobalStyle`
  body {
    margin-left: 12rem;
    margin-right 12rem;
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
  select {
    border: 1px solid rgba(0, 0, 0, 100);
    border-radius: 0;
    height: 2rem;
  }
  button {
    border: 1px solid rgba(0, 0, 0, 100);
    border-radius: 0;
    background: white;
    height: 2rem;
  }
`;

const SubOverview = styled.div`
  margin-left: 7rem;
  margin-right 7rem;
  padding: 0;
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

const Loading = styled.div`
  background: rgba(250,250,250,0);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  background: rgba(226,226,226,100);
  height: 5rem;
  display: flex;
  justify-content: space-between;
`;

const SearchBar = styled.div`
  border: 1px solid rgba(0, 0, 0, 100);
  width: 9rem;
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
        <h1>Hello World!!!!!</h1>
        <OverviewContainer />
        <SubOverview>
          {product.id ? <p>{ JSON.stringify(product)}</p> : null}
          {reviews.product ? <p>{ JSON.stringify(reviews)}</p> : null}
          {styles.product_id ? <p>{ JSON.stringify(styles)}</p> : null}
          {metaData.product_id ? <p>{ JSON.stringify(metaData)}</p> : null}
          {questions.length ? <p>{ JSON.stringify(questions)}</p> : null}
          {relatedProducts.length ? <p>{ JSON.stringify(relatedProducts)}</p> : null}
        </SubOverview>
    </>
  );
};

export default App
