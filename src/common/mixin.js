import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop"
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,100)
    // 对监听事件进行保存
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on("imgLoad",this.itemImgListener)
    // console.log("我是混入内容");
    
  },
}
export const backTopMixin = {
  data() {
    return {
      isBackTop:false,
    }
  },
  components: {
    BackTop,
  },
  methods: {
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0,0)
    },
  },

}