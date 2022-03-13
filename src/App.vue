<template>
  <div id="app">
    <van-popup v-model="isShow">
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
      <van-button type="primary" block @click="hh = !hh" style="borderRadius: 20px">出现</van-button>
      <HelloWorld v-if="hh" />
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
    },
    show: {
      type: Boolean,
      required: false,
      default:true
    }
  },
  computed: {
    isShow: {
      set () {},
      get () {
        return this.show
      }
    }
  },
  data: () => {
    return {
      username: '',
      phone: '',
      hh: false
    }
  },
  methods: {
    login () {
      console.log(this.username, this.phone)
      this.$emit('update:show', false)
      console.log(this.isShow)

    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
