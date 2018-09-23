<template>
    <div>
      <b-row>
        <b-col>
          <mt-search v-model="value" :result.sync="result"></mt-search>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <img slot="icon">
            外卖
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" >
            订单
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" >
            发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" >
            我的
          </mt-tab-item>
          </mt-tabbar>
        </b-col>
      </b-row>
    </div>
</template>

<script>
    export default {
        name: "topic",
      data(){
          return {
            result: [
              '失物查询',
              '万能表白',
              '联系学霸',
            ]
          }
      }
    }
</script>

<style scoped>

</style>
