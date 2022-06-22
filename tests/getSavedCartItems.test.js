const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it ('Chamar o método localStorage.setItem ao executar saveCartItems com o argumento <ol><li>Item</li></ol>', async () => {
    const fun = await getSavedCartItems();
    console.log(localStorage.setItem());
    console.log(fun);
    expect(localStorage.setItem()).toHaveBeenCalledTimes(1);
  });
  it ('Chama o método localStorage.setItem com dois parâmetros ao executar saveCartItems com o argumento <ol><li>Item</li></ol>', async () => {
    const fun = await getSavedCartItems();
    console.log(localStorage.setItem());
    console.log(fun);
    expect(localStorage.setItem('cartItems')).toHaveBeenCalledTimes(1);
  });
});
