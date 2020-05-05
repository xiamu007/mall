<template>
  <div class="item">

    <div class="check"  >
      <check-button :is-checked="listItem.isChecked" @click.native="checkClick"/>
    </div>
    <div class="info">
      <div class="image">
        <img :src="listItem.image" alt="" >
      </div>
      <div class="infos">
        <div>{{listItem.price}}</div>
        <div>{{listItem.count}}</div>
      </div>
    </div>

  </div>
</template>
<script>
import CheckButton from "components/content/checkButton/CheckButton"
export default {
  name: "CartListItem",
  data() {
    return {
      
    }
  },
  props:{
    listItem: {
      type: Object
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.listItem.isChecked = !this.listItem.isChecked;
    },

  },
}
</script>
<style scoped>
 .item {
   display: flex;
   width: 100%;
   height: 110px;
   
 }
 .check {
   margin: 20px 2px 0;
 }
 .info {
   flex: 1;
   display: flex;
 }
 .info img {
   height: 110px;
 }
</style>