// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
// module.exports = {
//   css:{
//     loaderOption:{
//       sass:{
//         prependData:'@import "@/assets/style.scss";'
//       }
//     }
//   }
// }

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/vue-fgm/",
  };