require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aquii
  it ('Ser uma função', async () => {
    const fun = await fetchItem;
    expect(typeof fun).toBe('function');
  });
  it ('Chamar o fetchItem quando passado o argumento MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledTimes(1);
  });
  it ('Utilizar o endpoint, quando chamar a função com o argumento MLB1615760527', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it ('Retornar a mesma estrutura de dados do item, ao chamar a função com argumento MLB1615760527', async () => {
    const mockResult = await fetchItem('MLB1615760527');
    expect(mockResult).toStrictEqual(item);
  });
  it ('Retornar um erro com a mensagem "You must provide an url", ao chamar a função sem nenhum argumento', async () => {
    const testError = await fetchItem();
    expect(testError).toEqual(new Error('You must provide an url'));
  });
});
