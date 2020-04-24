<template>
  <div class="param-info" v-if="Object.keys(paramInfo) !== 0">
    <table v-for="(table,index) in paramInfo.sizes" :key="index" class="table1">
      <tr v-for="(tr,indey) in table" :key="indey" class="tr1">
        <td v-for="(td,indez) in tr" :key="indez" class="td1">
          {{td}}
        </td>
      </tr>
    </table>
    
    <table class="table2">
      <tr v-for="(item,index) in paramInfo.infos" :key="index" class="tr2">
        <td class="key"><span>{{item.key}}</span></td>
        <td class="value"><span>{{item.value}}</span></td>
      </tr>
    </table>
    
    <div class="info-img2" v-if="paramInfo.image">
      <img :src="paramInfo.image[0]" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object
    }
  }
}
</script>
<style scoped>
  .param-info {
    padding: 15px 0;

    border-bottom: 5px solid rgba(100,100,100,.1);
  }
  .table1 {
    padding: 0 15px;
    width: 100%;
    
  }
  .tr1 {
    font-size: 14px;
    color: #666;
    height: 42px;
  }
  .td1{
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .table2 {
    padding: 0 15px;
    font-size: 14px;
  }
  .tr2 {
    height: 42px;
  }
  .key, .value {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .key {
    width: 90px;
    color: #666;
  }
  .value {
    color: #eb4868
  }
</style>