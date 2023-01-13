const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it ('Chamar o método localStorage.setItem ao executar saveCartItems com o argumento <ol><li>Item</li></ol>', async () => {
    const fun = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem()).toHaveBeenCalledTimes(1);
  });
  it ('Chama o método localStorage.setItem com dois parâmetros ao executar saveCartItems com o argumento <ol><li>Item</li></ol>', async () => {
    const fun = await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.getItem('cartItems')).toHaveBeenCalledTimes(1);
  });
});
