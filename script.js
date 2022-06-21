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

const renderItem = async (click) => {
  const products = await fetchItem(`${click}`);
  const { id, title, price } = products;
  const productBox = createCartItemElement({ 
    sku: `${id}`, name: `${title}`, salePrice: `${price}` });
  const cartItem = document.querySelector('.cart__items');
  cartItem.appendChild(productBox);
};

const itemSelected = () => {
    const rrr = domQSAll('.item__add');
    rrr.forEach((item) => {
    item.addEventListener('click', () => {
      const aaa = item.closest('.item');
      const ttt = aaa.firstElementChild.textContent;
      renderItem(ttt);
    });
  });
};
setTimeout(itemSelected, 100);

  // domQSAll('item').forEach((item, key) => {
  //   const aa = item.addEventListener('click', (ev) => {
  //     resetSelected();
  //     ev.target.classList.add('selected');
  //     console.log(ev);
  //   });
  // });
// // eslint-disable-next-line max-lines-per-function
// const itemSelected = async () => {
//   const domQS = (qs) => document.querySelector(qs);
//   const buttonItem = document.querySelector('.items');
//   console.log(buttonItem);
//   // const { id } = await fetchItem('MLB2201947940');
//   const yyy = buttonItem.addEventListener('mouseover', async (ev) => {
//     // console.log(childNodes);
//     const child = domQS('.item__add').addEventListener('click', () => {
//       //   const ids = document.querySelectorAll('.item');
//       //   renderItem(id.textContent);
//     // console.log(id.textContent);
//     });
//     // const childNod = [...child];
//     ev.preventDefault();
//     const teste = ev.target.closest('.item__sku').getAttribute('item___sku');
//     console.log(teste);
//     const eee = childNod.map((it, index) => childNod.find((id) => {
//       const idS = document.querySelector('.item__sku');
//       console.log(id);
//       id. idS.textContent
//       return idS;
//       }));
//       console.log(eee);

//     });
//     // });
//   console.log(yyy);
// };

// const childNodes = document.querySelectorAll('.item');
// // console.log(event.target);
// childNodes.addEventListener('mousemove', async () => {

window.onload = () => {
  renderProduct();
  itemSelected();
};
