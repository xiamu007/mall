module.exports = {
  configureWebpack: {
    // resolve(解决)   解决路径问题   
    resolve: {
      // alias(别名)   起别名
      alias: {
        // 自带 "@" 别名,src
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
      }
    }
  }
}