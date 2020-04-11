<template>
  <div class="item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "component_name",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color:this.activeColor} : {}
    }
  },
}


</script>
<style scoped>
 .item {
   height: 49px;
   flex: 1;
   text-align: center;
   font-size: 14px;
   margin-top: 3px;
 }
 .item img {
   height: 24px;
   vertical-align: middle;
   margin-bottom: 2px;
 }
</style>