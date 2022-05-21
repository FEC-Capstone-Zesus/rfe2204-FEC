
import { createGlobalStyle } from "styled-components";

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
  `;

const App = ( { product, reviews, styles, metaData, questions, relatedProducts } ) => {

  return (
    <>
      <GlobalStyle />
      <h1>Hello World!!!!!</h1>
      {/* {product.id ? <p>{ JSON.stringify(product)}</p> : null} */}
      {/* {reviews ? <p>{ JSON.stringify(reviews)}</p> : null} */}
      {/* {styles ? <p>{ JSON.stringify(styles)}</p> : null} */}
      {/* {metaData ? <p>{ JSON.stringify(metaData)}</p> : null} */}
      {/* {questions ? <p>{ JSON.stringify(questions)}</p> : null} */}
      {relatedProducts ? <p>{ JSON.stringify(relatedProducts)}</p> : null}



    </>
  );
};

export default App