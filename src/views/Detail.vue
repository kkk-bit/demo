<template>
  <div class="detail">
    <img src="@/assets/3.jpg" alt="" />
    <h1>{{ product.name }}</h1>
    <p>￥{{ product.price }}</p>
    <div class="btn">
      <van-button plain type="primary" @click="buyHandle(product)"
        >加入购物车</van-button
      >
    </div>
  </div>
</template>

<script>
import { loadProductDetail } from "../services/products";
import { addToCart } from "../services/carts";

export default {
  name: "Detail",
  data() {
    return {
      product: {},
    };
  },

  created() {
    console.log("组件创建成功了");
    this.loadData();
  },
  // eslint-disable-next-line no-unused-vars
  // beforeRouteUpdate(to, from, next) {
  //   // console.log(to);
  //   // console.log(from);
  //   // console.log(next);
  //   // 在当前路由改变，但是该组件被复用时调用
  //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //   // 可以访问组件实例 `this`
  //   // console.log(this.$route.query.id);
  //   this.loadData();
  // },
  watch: {
    $route() {
      this.loadData();
    },
  },
  methods: {
    async loadData() {
      if (this.$route.query.id) {
        const result = await loadProductDetail(this.$route.query.id);
        this.product = result;
      }
    },
    async buyHandle(product) {
      const res = await addToCart(product._id, 1);
      console.log(res);
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}
p {
  text-align: center;
  color: red;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  position: fixed;
  bottom: 0;
}
</style>
