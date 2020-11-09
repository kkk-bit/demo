import { post, get } from "../utils/request";

export function loadCartData() {
  return get('http://localhost:3009/api/v1/shop_carts')
}

/**
 * 加入购物车
 * @param {*} product   商品id
 * @param {*} amount    数量
 */
export function addToCart(product, amount) {
  return post("http://localhost:3009/api/v1/shop_carts", {
    product,
    quantity: amount,
  });
}
/* 删除购物车信息
*/
/* export function deleteCart(id) {
  return remove("http://localhost:3009/api/v1/shop_carts/" + id, {
  });
} */
/* 删除购物车信息组
*/
/* export function delmany(ids) {
  return post("http://localhost:3009//api/v1/shop_carts/delmany", {
    ids
  });
} */
