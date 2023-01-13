const domQS = (qs) => document.querySelector(qs);
const domQSAll = (qs) => document.querySelectorAll(qs);

const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

let priceAtual = 0;
const priceItem = (priceAtualizado) => {
  domQS('.total-price').innerText = priceAtualizado;
    // .toLocaleString({ style: 'currency' })
    // .split('.');
};

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const itemRemove = event.path[0];
  itemRemove.parentNode.removeChild(itemRemove);
  const itemPrice = itemRemove.innerText.split('$', 8);
  priceAtual -= itemPrice[1];
  priceItem(priceAtual);
  saveCartItems();
  localStorage.setItem('priceItems', JSON.stringify(priceAtual));
};

const createCartItemElementStorage = (item) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `${item}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const renderItemStorage = async () => {
  const items = await getSavedCartItems();
  await items.forEach((item) => {
    const productBox = createCartItemElementStorage(item);
    const cartItem = document.querySelector('.cart__items');
    cartItem.appendChild(productBox);
  });
  const price = localStorage.getItem('priceItems');
  priceItem(price);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const renderItem = async (idItem) => {
  const products = await fetchItem(`${idItem}`);
  const { id, title, price } = products;
  const productBox = createCartItemElement({ 
    sku: `${id}`, name: `${title}`, salePrice: `${price}` });
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(productBox);
  priceAtual += price;
  priceItem(priceAtual);
  await saveCartItems();
  localStorage.setItem('priceItems', JSON.stringify(priceAtual));
};

const itemCart = async () => {
  const buttonAdd = domQSAll('.item__add');
    buttonAdd.forEach(async (item) => {
    await item.addEventListener('click', async () => {
      const infoItem = await item.closest('.item');
      await renderItem(getSkuFromProductItem(infoItem));
      // const idItem = infoItem.firstElementChild.textContent;
      // renderItem(idItem);
    });
  });
};

const renderProduct = async () => {
  const itemsSection = document.querySelector('.items');
  const products = await fetchProducts('computador');
  const { results } = products;
  results.forEach((product) => {
    const { id, title, thumbnail } = product;
    const productBox = createProductItemElement({ 
      sku: `${id}`, name: `${title}`, image: `${thumbnail}` });
    itemsSection.appendChild(productBox);
  });
  await itemCart();
};

const esvaziar = () => {
  const dataItems = domQSAll('.cart__item');
    dataItems.forEach(async (item) => {
      await item.parentNode.removeChild(item);
    });
  };
  const buttonEsvaziar = domQS('.empty-cart');
  buttonEsvaziar.addEventListener('click', () => {
    priceItem(0);
    esvaziar();
    localStorage.setItem('priceItems', 0);
    localStorage.setItem('cartItems', []);
  });

window.onload = () => {
  renderProduct();
  renderItemStorage();
};
