<template>
  <div>
    <mt-field label="username" state="success" v-model="username"></mt-field>
    <mt-field label="email" :state="emailState" v-model="email"></mt-field>
    <mt-button @click="doLogin">登陆</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
        username:'',
        email:'',
        emailState:''
    };
  },
  methods: {
      doLogin() {
          this.$axios.put('users/'+ this.username, {
              isLogin: true
          })
          .then ( res => {
              window.localStorage.setItem('username',this.username);
              this.$router.push(
                  {name: 'music.list'}
              )
          })
      }
  },
  watch:{
      email: function (newV) {
          if(newV == "haha@qq.com") {
              this.emailState = 'success';
          }else if (!newV.includes('@')) {
              this.emailState = 'error';
          }else{
              this.emailState = 'warning';
          }
      }
  }
};
</script>

<style sroped>

</style>


