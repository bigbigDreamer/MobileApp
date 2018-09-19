<template>
    <div>
      <b-row >
        <b-col>
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 ">
            <p class="card-text text-center">
              <i class='icon iconfont bl-icon-iconfontguangchang text-center'></i>
              <br>主题广场
            </p>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
            @click="loadImg"
          >
            <p class="card-text text-center">
              <i class='icon iconfont bl-icon-tupian text-center'></i>
              <br>图片寄存
            </p>
          </b-card>
        </b-col>
      </b-row>
      <b-row >
        <b-col>
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text text-center">
              <i class='icon iconfont bl-icon-yinyue text-center'></i>
              <br>音乐点播
            </p>
          </b-card>
        </b-col>
        <b-col cols="6">
          <b-card
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text text-center">
              <i class='icon iconfont bl-icon-zhuye '></i>
              <br>失物招领
            </p>
          </b-card>
        </b-col>
      </b-row>
    </div>
</template>

<script>
    export default {
        name: "menu",
      methods:{
        loadImg(){
          this.$router.push({path:'/icon/imgs'})
        }
      }
    }
</script>

<style lang="less" scoped>
  .mb-2{
    background-color: #42B983;
    i{
      font-size: 5rem;
      color: #FFFFFF;
      &:hover{
        color: #DDDDDD;
      }
    }
    &:hover{
      background-color: #FFFFFF ;
    }
  }
</style>
