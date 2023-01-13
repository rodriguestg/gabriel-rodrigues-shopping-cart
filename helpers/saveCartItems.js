const saveCartItems = () => {
  // seu código aqui
const domQSAll = (qs) => document.querySelectorAll(qs);
const itemsCard = domQSAll('.cart__item');
const arrayStorage = [];
itemsCard.forEach((item) => {
  arrayStorage.push(item.innerText);
});
localStorage.setItem('cartItems', JSON.stringify(arrayStorage));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
