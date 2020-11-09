<template>
  <div class="goods">
    <header>
      <van-nav-bar title="标题" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>
    <!-- <分组> -->
    <section>
      <van-tree-select
        height="55vw"
        :items="items"
        :main-active-index.sync="active"
      >
        <template #content>
          <div class="group-one" v-if="active === 0">
            <h2>手机1</h2>
            <van-card
              v-for="item in products"
              :key="item._id"
              :num="item.quantity"
              :price="item.price"
              desc="描述信息"
              :title="item.name"
              :thumb="item.coverImg | dalImg"
              :thumb-link="'/#/detail?id=' + item._id"
            >
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #footer>
                <van-button size="mini" @click="buyHandle(item)"
                  >加入购物车</van-button
                >
                <van-button size="mini">按钮</van-button>
              </template>
            </van-card>
          </div>
          <div class="group-one" v-if="active === 1">
            <h2>手机2</h2>
            <van-card
              v-for="item in products"
              :key="item._id"
              :num="item.quantity"
              :price="item.price"
              desc="描述信息"
              :title="item.name"
              :thumb="item.coverImg | dalImg"
              :thumb-link="'/#/detail?id=' + item._id"
            >
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
              <template #footer>
                <van-button size="mini" @click="buyHandle(item)"
                  >加入购物车</van-button
                >
                <van-button size="mini">按钮</van-button>
              </template>
            </van-card>
          </div>
        </template>
      </van-tree-select>
    </section>
    <footer></footer>
  </div>
</template>

<script>
import { loadProducts } from "../services/products";
import { addToCart } from "../services/carts";

export default {
  name: "List",
  data() {
    return {
      active: 0,

      items: [{ text: "分组 1" }, { text: "分组 2" }],
      products: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const result = await loadProducts();
      this.products = result.products;
      console.log(result);
    },
    async buyHandle(item) {
      const res = await addToCart(item._id, 1);
      console.log(res);
    },
  },
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-direction: column;
}
header {
  flex: 2;
}
section {
  flex: 7;
  overflow-y: scroll;
  background: red;
}

header {
  flex: 1;
}
</style>
