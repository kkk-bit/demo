<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <van-tabbar route v-model="active" active-color="#ff2d51">
        <!-- :fixed="false"  -->
        <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
          >首页</van-tabbar-item
        >
        <van-tabbar-item icon="fire-o" :to="{ name: 'List' }"
          >热卖</van-tabbar-item
        >
        <van-tabbar-item icon="cart-o" badge="5" :to="{ name: 'Cart' }"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item icon="user-o" :to="{ name: 'User' }"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
header {
  flex: 2;
}
section {
  flex: 7;
}
header {
  flex: 1;
}
</style>
