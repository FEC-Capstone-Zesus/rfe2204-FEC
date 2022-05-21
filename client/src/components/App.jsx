
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

const App = ( { product } ) => {

  return (
    <>
      <GlobalStyle />
      <h1>Hello World!!!!!</h1>
      {product.id ? <p>{ JSON.stringify(product)}</p> : null}
    </>
  );
};

export default App