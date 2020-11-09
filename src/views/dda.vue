<template>
  <div class="cart">
    <ul>
      <li v-for="c in cartData" :key="c._id">
        ​ <input type="checkbox" v-model="c.checked" />

        ​ {{ c.product.name }}
      </li>

      <li><input type="checkbox" v-model="checkAll" />全选</li>
    </ul>

    <p>总价:{{ sumPrice }}</p>
  </div>
</template>

<script>


import { loadCartData } from "../services/carts";



export default {

 name: "cart",

 data() {

  return {

   cartData: [],

  };

 },

 computed: {

  checkAll: {

   set(v) {

​    this.cartData.forEach((item) => (item.checked = v));

   },

   get() {

​    return (

​     this.cartData.length === this.cartData.filter((i) => i.checked).length

​    );

   },

  },

  sumPrice() {

   return this.cartData

​    .filter((i) => i.checked)

​    .reduce((pre, cur) => {

​     return pre + cur.quantity * cur.product.price;

​    }, 0);

  },

 },

 watch: {},

 methods: {},

 created() {

  loadCartData().then(

   (res) =>

​    (this.cartData = res.map((item) => ({ ...item, checked: false })))

  );

 },

 mounted() {},

 beforeCreate() {},

 beforeMount() {},

 beforeUpdate() {},

 updated() {},

 beforeDestroy() {},

 destroyed() {},

 activated() {},

 components: {},

};
</script>

<style lang="scss" scoped></style>
