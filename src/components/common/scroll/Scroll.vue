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
    probeType: {
      type: Number,
      default: 0,
    },
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
    this.bscroll.on("scroll", (position) => {
      this.$emit("changePos",position)
    })

    this.bscroll.on("pullingUp", () => {
      this.$emit("pullingUp")
    })

  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.bscroll.scrollTo(x,y,time)
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    }
  },
  
}
</script>
<style scoped>
</style>