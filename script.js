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

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  const itemRemove = event.path[0];
  itemRemove.parentNode.removeChild(itemRemove);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
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
};

const renderItem = async (idItem) => {
  const products = await fetchItem(`${idItem}`);
  const { id, title, price } = products;
  const productBox = createCartItemElement({ 
    sku: `${id}`, name: `${title}`, salePrice: `${price}` });
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(productBox);
};

const itemSelected = () => {
    const buttonAdd = domQSAll('.item__add');
    buttonAdd.forEach((item) => {
    item.addEventListener('click', () => {
      const infoItem = item.closest('.item');
      const idItem = infoItem.firstElementChild.textContent;
      renderItem(idItem);
    });
  });
};
setTimeout(itemSelected, 100);

const esvaziar = () => {
  const buttonEsvaziar = domQS('.empty-cart');
    buttonEsvaziar.addEventListener('click', () => {
      const dataItems = domQSAll('.cart__item');
      dataItems.forEach((item) => {
      item.parentNode.removeChild(item);
    });
  });
};
setTimeout(esvaziar, 100);

window.onload = () => {
  renderProduct();
  itemSelected();
};
