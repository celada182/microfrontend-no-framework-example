import faker from 'faker';

const mount = (element) => {
  element.innerHTML = `<div>You have ${faker.random.number()} items in your cart</div>`;
};

if (process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-cart');
  if (element) {
    mount(element);
  }
}

export {mount}