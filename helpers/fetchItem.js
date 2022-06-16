const fetchItem = async ($ItemID) => {
  // seu código aqui
  try {
    const ENDPOINT = `https://api.mercadolibre.com/items/${$ItemID}`;
    const response = await fetch(ENDPOINT);
    const result = await response.json();
    return result;    
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
