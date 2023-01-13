const getSavedCartItems = () => {
  // seu código aqui
  const cardItemsStorage = localStorage.getItem('cartItems');
  return JSON.parse(cardItemsStorage);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
