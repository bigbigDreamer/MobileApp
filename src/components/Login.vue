<template>
    <div>
      <b-row>
        <b-col>
          <mt-header  title="欢迎来到APP" class="mt-header"></mt-header>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-img :src="require('../assets/小丑.jpg')" fluid></b-img>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-jumbotron header="A Vue WebApp" >
          </b-jumbotron>
        </b-col>
      </b-row>
      <b-row>
          <b-col>
            <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
            <mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
            <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
            <b-button block variant="success">登陆</b-button>
          </b-col>
      </b-row>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            username:'',
            email:'',
            password:'',
            phone:'',
            website:''
          }
      }
    }
</script>

<style lang="less">
  .mt-header {
    background-color: #939393;
  }
</style>
