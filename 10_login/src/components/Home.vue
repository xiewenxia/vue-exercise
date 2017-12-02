<template>
  <div>
      <!-- 通过名称找路由对象，获取其path，生成自己的href -->
      <router-link :to="{name: 'login'}">登陆</router-link>
      <button type="danger" size="small" @click="exit">退出</button>
      <router-link :to="{name: 'music'}">音乐</router-link>
      <router-link :to="{name: 'music.list'}">音乐列表</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
      exit() {
        var username = window.localStorage.getItem('username');
          this.$axios.put('users/' + username, {
            isLogin: false
          }).then( res=> {
            this.$router.push({
              name: 'login'
            })
          })
      }
  }
}
</script>

<style sroped>
    
</style>


