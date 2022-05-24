const Relateditems = ( {product, reviews, styles, metaData, relatedProducts } ) => {
  {console.log(styles)}
  return (
    <div className = "card">
      <div className = "cardBody">
        {styles.results !== undefined ? <img src = {styles.results[0].photos[0].thumbnail_url}/> : null}
        <p >{product.category}</p>
        <h2 >{product.name}</h2>
        <p >{product.default_price}</p>
      </div>
    </div>
  );
};

export default Relateditems