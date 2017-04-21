export function cart() {
  const items = [];
  return {
    get,
    add,
    remove
  };

  function get() {
    return items;
  }

  function add(item) {
    items.push(item);
  }

  function remove(index) {
    items[index].inCart = false;
    items.splice(index, 1);
  }
}
