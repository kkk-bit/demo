import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
// import { serverUrl } from "./utils/tools";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Vant);

Vue.filter("dalImg", (str) => {
  if (str) {
    if (str.startsWith("http")) {
      return str;
    } else {
      return "http://localhost:3009" + str;
    }
  } else {
    return "http://m.360buyimg.com/babel/s230x230_jfs/t1/120038/33/16255/277392/5f96519aEf5fc38bc/325d02536390e903.jpg!q70.dpg";
  }
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
