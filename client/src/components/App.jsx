import React from "react";
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

const App = (props) => {
  console.log('props: ', props);
  return (
    <>
      <GlobalStyle />
      <h1>Hello World!!!!!</h1>
      <p>{props.product.id ? JSON.stringify(props.product) : null}</p>
    </>
  );
};

export default App;



