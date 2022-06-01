import styled from "styled-components";

const SummaryDiv = styled.div`
  margin-top: -2rem;
  display: flex;
  justify-content: space-between;
`
const Slogan = styled.div`
  border-right: 2px solid rgba(0, 0, 0, 100);
  width: 75%;
`
const Features = styled.div`
  width: 25%;
`

const Summary = ( { product } ) => {
  return (
    <SummaryDiv>
      <Slogan>
        <h3>{product.id ? product.slogan : null}</h3>
        <p>{product.id ? product.description : null}</p>
      </Slogan>
      <Features>
        <ul style={{ listStyle: 'none' }}>
          {product.id ? product.features.map(qualities =>
            <li key={qualities.feature}
                style={{ fontSize: 80 + '%' }}>✓ {qualities.value} {qualities.feature}</li>)
          : null}
        </ul>
      </Features>
    </SummaryDiv>
  );
}

export default Summary