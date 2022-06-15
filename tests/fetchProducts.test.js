require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it ('Ser uma função', async () => {
    const fun = await fetchProducts;
    expect(typeof fun).toBe('function');
  });
  it ('Chamar o fetch quando passado o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it ('Utilizar o endpoint, quando chamar a função com o argumento computador', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it ('Retornar a mesma estrutura de dados do computadorSearch, ao chamar a função com argumento computador', async () => {
    const mockResult = await fetchProducts('computador');
    expect(mockResult).toStrictEqual(computadorSearch);
  });
  it ('Retornar um erro com a mensagem "You must provide an url", ao chamar a função sem nenhum argumento', async () => {
    const testError = await fetchProducts();
    expect(testError).toEqual(new Error('You must provide an url'));
  });
});
