<template>
    <b-container>
      <router-view></router-view>
    </b-container>
</template>

<script>
  import Login from './components/Login'
  import {mapState} from 'vuex'
export default {
  name: 'App',
  components:{
    Login
  },
  computed: {
    ...mapState([
      'status'
    ])
  },
  watch:{
    status:function () {
       if(this.status === 1) {
         this.$router.push({path:'/login'});
       }
    }
  }
}
</script>

<style>

</style>
