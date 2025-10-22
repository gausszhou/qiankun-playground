const { base } = require("../config.json");
const { name } = require("./package.json");

module.exports = {
  devServer: {
    port: 9002,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  outputDir: "../../dist/qiankun-playground/" + name,
  // 配置相对路径
  publicPath: base ? `${base}${name}/` : "/",
  // 生成map文件
  productionSourceMap: false,
  // 文件携带哈希值
  filenameHashing: true,
  configureWebpack: {
    output: {
      library: name,
      libraryTarget: "window", // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  },
  chainWebpack: config => {
    config.module
      .rule("fonts")
      .test(/.(ttf|otf|eot|woff|woff2)$/)
      .use("url-loader")
      .loader("url-loader")
      .tap(options => {
        options = {
          limit: 1000 * 1000,
          name: `/fonts/[name].[ext]`
        };
        return options;
      });
  }
};
