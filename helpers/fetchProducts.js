const fetchProducts = async ($QUERY) => {
  // seu código aqui
  try {
    const ENDPOINT = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
