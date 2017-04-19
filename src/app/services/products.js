import products from './products.json';

export function Products() {
  return {
    get,
    products
  };

  function get(id) {
    if (id) {
      return products[id];
    }
    return products;
  }
}
