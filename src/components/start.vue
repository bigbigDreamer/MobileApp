<template>
  <div>
      <b-row>
        <b-col>
          <div>
            <b-img :src = "require('../assets/boot.jpg')" fluid alt="Responsive image" />
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-media right-align vertical-align="center">
            <h5 class="mt-0 mb-1">Personal mark</h5>
            It was the first mobile version of the site
            I wanted to write, perhaps to try vue, but I really loved bootstrap and it's grid layout.
          </b-media>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <mt-button type="default"  size="large" @click="start">Go</mt-button>
          <mt-progress :value="value" v-show="isProgress">
            <div slot="end">{{this.value}}%</div>
          </mt-progress>
          <hr>
          <b-card class="text-center">
            <small style=" color:#939393;">陇ICP备18002264号</small>
            <br>
            <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=62010302000249" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
              <img src="../assets/备案图标.png" style="float:left;"/>
              <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">甘公网安备 62010302000249号</p>
            </a>
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>
  import {mapState,mapActions}  from 'vuex'
    export default {
        name: "main",
      data(){
        return {
          isProgress:false,
          value:0
        }
      },
      computed: {
        ...mapState([
          'status'
        ])
      },
      methods:{
        ...mapActions([
          'deepWatch'
        ]),
        start: function () {
          this.isProgress = true
          const timer = setInterval(() => {
            this.value += 1;
            if (this.value === 100) {
              clearInterval(timer);
              this.isProgress = false;
              this.value = 0
              this.deepWatch(1);
            }
          }, 1000 / 10);
        }
      }
    }
</script>

<style scoped>

</style>
