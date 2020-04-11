<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="错误">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props:{
    recommends: {
      type:Array
    }
  }
}
</script>
<style scoped>
  .recommend {
    display: flex;
    font-size: 12px;
    text-align: center;
    /* width: 100%; */
    padding: 10px 0 15px;
    border-bottom: 8px solid #eee;
  }
  .item {
    flex: 1;
    
  }
  .recommend img {
    width: 70px;
    margin-bottom: 10px;
  }

</style>