<template>
  <div class="home">
    <header>
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>
    <section>
      <van-tabs v-model="active">
        <!-- <  标签 1> -->
        <van-tab title="推荐">
          <!-- 轮播图 -->
          <div class="bannerone">
            <van-swipe :autoplay="3000">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
          </div>
          <!-- 宫格2 -->
          <div class="gridtwo">
            <van-grid :gutter="10">
              <van-grid-item icon="photo-o" text="米粉卡" />
              <van-grid-item icon="star-o" text="以旧换新" />
              <van-grid-item icon="user-o" text="新品发布" />
              <van-grid-item icon="like-o" text="物流查询" />
            </van-grid>
          </div>
          <!-- 宫格加卡片 -->
          <van-grid :border="false" :column-num="2">
            <van-grid-item>
              <!-- 卡片1 -->

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
            </van-grid-item>
            <van-grid-item>
              <!-- 卡片2 -->

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
            </van-grid-item>
            <van-grid-item>
              <!-- 卡片3-->

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
            </van-grid-item>
            <van-grid-item>
              <!-- 卡片4 -->

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
            </van-grid-item>
            <van-grid-item>
              <!-- 卡片5 -->

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
            </van-grid-item>
            <van-grid-item>
              <!-- 卡片6 -->

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
            </van-grid-item>
          </van-grid>
        </van-tab>
        <!-- < / 标签 1> -->
        <!--   <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab> -->
      </van-tabs>
    </section>
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import { Lazyload } from "vant";
import { loadProducts } from "../services/products";
import { addToCart } from "../services/carts";

Vue.use(Lazyload);

export default {
  data() {
    return {
      active: 2,
      images: [
        require("@/assets/3.jpg"),
        require("@/assets/4.jpg"),
        require("@/assets/s1.jpg"),
        require("@/assets/s4.jpg"),
      ],
      products: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    async loadData() {
      const result = await loadProducts();
      this.products = result.products;
    },
    async buyHandle(item) {
      const res = await addToCart(item._id, 1);
      console.log(res);
    },
  },
  created() {
    this.loadData();
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

<style scoped>
section {
  overflow-y: auto;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}

.bannerone img {
  width: 100%;
  height: 10rem;
}
.gridtwo {
  margin-top: 6px;
}
.van-grid-item {
  width: 50%;
}
</style>
