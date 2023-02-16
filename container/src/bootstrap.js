import {mount as mountProducts} from 'products/ProductsIndex';
import {mount as mountCart} from 'cart/CartIndex';

const products = document.querySelector('#my-products');
mountProducts(products);

const cart = document.querySelector('#my-cart');
mountCart(cart);