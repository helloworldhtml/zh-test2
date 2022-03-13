<template>
  <div id="app">
  <van-popup v-model="show">
    <van-field
      v-model="username"
      error
      required
      label="用户名"
    ></van-field>
    <van-field
      v-model="phone"
      required
      label="手机号"
      placeholder="请输入手机号"
    ></van-field>
    <van-button type="primary" block @click="login" color="#e02727" style="borderRadius: 20px">登录</van-button>
  </van-popup>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  props: {
    LoginId: {
      type: [Number, String],
      required: true
    }
  },
  data: () => {
    return {
      username: '',
      phone: ''
    }
  },
  methods: {
    login () {
      console.log(this.username, this.phone)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
