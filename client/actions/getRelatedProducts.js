const getRelatedProducts = (relatedProducts) => (
  {
    type : 'GET_RELATEDPRODUCTS',
    relatedProducts : relatedProducts
  }
);

export default getRelatedProducts;