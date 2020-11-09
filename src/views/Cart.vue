<template>
  <div class="cart">
    全选：<input
      type="checkbox"
      @change="handleChange"
      v-model="isAllChecked"
    />
    <!--  <input type="checkbox" /> -->
    <ul>
      <li v-for="da in cartData" :key="da._id">
        <input
          type="checkbox"
          v-model="checkgroup"
          :value="da"
          @change="handleLiChange"
        />
        {{ da.product.name }}, <span>￥{{ da.product.price }} </span>
        <button @click="handleDelClick(da)">-</button>
        {{ da.product.quantity }}
        <button @click="da.product.quantity++">+</button>
      </li>
    </ul>
    <p>总金额{{ getsum() }}</p>
    <!-- 显示选中的商品信息 -->
    <!--  {{ checkgroup }} -->
  </div>
</template>

<script>
import { loadCartData } from "../services/carts";

export default {
  name: "cart",
  data() {
    return {
      cartData: [],
      checkgroup: [],
      isAllChecked: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    async loaaa() {
      const res = await loadCartData();
      console.log(11111111111, res);
      this.cartData = res;
    },
    // 函数计算中的状态改变后，的数会自动执行一变

    // 作用：选中时显示对应的总价
    getsum() {
      var sum = 0;
      for (var i in this.checkgroup) {
        sum +=
          this.checkgroup[i].product.quantity *
          this.checkgroup[i].product.price;
      }
      return sum;
    },

    handleChange() {
      console.log("改变了", this.isAllChecked);
      // 判断如果选中,那么选中的商品=数据列表的商品,则单选框选中，否则未选中

      if (this.isAllChecked) {
        this.checkgroup = this.cartData;
      } else {
        this.checkgroup = [];
      }
    },
    handleLiChange() {
      console.log("handleLiChange-判断是不是都勾选");
      // 选中的商品个数=数据里的商品个数,则全选框选中，否则未选中
      if (this.checkgroup.length === this.cartData.length) {
        this.isAllChecked = true;
      } else {
        this.isAllChecked = false;
      }
    },
    // 减号的点击事件,数据减少，并判断数量到达零时，数量强制为一。
    handleDelClick(da) {
      // console.log(data)
      da.product.quantity--;
      if (da.product.quantity === 0) {
        da.product.quantity = 1;
      }
    },
  },

  created() {
    this.loaaa();

    // 调接口，页面渲染
  },
  mounted() {
    // dom操作
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {
    console.log(this.checkgroup);
    // 执行页面更新
  },
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped>
html,
body,
.cart {
  width: 100%;

  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: scroll;

  z-index: 3;
}

span {
  color: red;
}
</style>
