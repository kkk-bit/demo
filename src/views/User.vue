<template>
  <div class="out11">
    <button @click="outLogin()">退出登录</button>
  </div>
</template>

<script>
export default {
  methods:{
    outLogin(){
      localStorage.removeItem("token");
      this.$router.push({name:"Login"})
    }
  }
};
</script>

<style scoped>
.out11{
  widows: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
  width: 120px;
  background: chartreuse;
  border:1px solid black ;
  color: red;
  font-size: 20px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
</style>
