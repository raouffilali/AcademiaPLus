// cartItems.js

export const cartItems = [];

export function addToCart(course) {
  cartItems.push(course);
}
export function removeFromCart(item) {
  const index = cartItems.indexOf(item);
  if (index > -1) {
    cartItems.splice(index, 1);
  }
}


