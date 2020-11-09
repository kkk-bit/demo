<template>
  <div class="login">
    <img src="../assets/logo.png" alt="" class="logo" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repwd"
        type="password"
        name="确认密码"
        label="确认密码"
        placeholder="请再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="link">
      <router-link :to="{ name: 'Login' }">已有账号，我要登录!</router-link>
    </div>
  </div>
</template>

<script>
import { Notify } from "vant";
import { regApi } from "../services/auth";

export default {
  name: "Reg",
  data() {
    return {
      username: "",
      password: "",
      repwd: "",
    };
  },
  methods: {
    async onSubmit() {
      // console.log("登录");
      if (this.password === this.repwd) {
        // 调用接口
        const result = await regApi({
          userName: this.username,
          password: this.password,
        });
        if (result.code === "success") {
          localStorage.setItem("token", result.token);
          this.$router.push({
            name: "User",
          });
        } else {
          Notify({
            type: "danger",
            message: result.message,
          });
        }
        console.log(result);
      } else {
        Notify({
          type: "danger",
          message: "两次输入的密码不一致",
        });
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.link {
  width: 100%;
}
.link a {
  float: right;
  margin-right: 1.5rem;
  font-size: 0.8rem;
  color: blue;
}
</style>
