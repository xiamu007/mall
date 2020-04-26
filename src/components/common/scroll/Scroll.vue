<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
  name: "component_name",
  components: {
    BScroll,
  },
  data() {
    return {
      bscroll: null
    }
  },
  props: {
    // 是否监听滚动,0是不监听,还有有1,2,3
    probeType: {
      type: Number,
      default: 0,
    },
    // 是否监听上啦加载更多
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad
    })

    if(this.probeType) {
      this.bscroll.on("scroll", (position) => {
      this.$emit("changePos",position)
    })
    }

    if(this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    })

    }
  },
  methods: {
    // 回到顶部
    scrollTo(x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x,y,time)
    },
    // 下拉加载更多
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
    // 刷新
    refresh() {
      // console.log("----");
      this.bscroll && this.bscroll.refresh();
    },
    // 获取Y值
    getY() {
      return this.bscroll ? this.bscroll.y : 0
    }
    
  },
  
}
</script>
<style scoped>
</style>