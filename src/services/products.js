import { get } from "../utils/request";

/**
 * 加载商品列表
 */
export function loadProducts() {
  return get("http://localhost:3009/api/v1/products");
}

/**
 * 根据id加载详情
 * @param {*} id
 */
export function loadProductDetail(id) {
  return get("http://localhost:3009/api/v1/products/" + id);
}
