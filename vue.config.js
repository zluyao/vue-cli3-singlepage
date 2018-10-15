// 七牛上传插件
const QiniuPlugin = require('qiniu-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
let CompressionWebpackPlugin = require('compression-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: 'dist',
  lintOnSave: false, //禁用eslint
  baseUrl: process.env.NODE_ENV === "production" ? '/' : './',// 看生产环境是否是放在根目录
  productionSourceMap: false,

  // 调整内部的 webpack 配置。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },

  // CSS 相关选项
  css: {
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,

    // 是否开启 CSS source map？
    sourceMap: false,

    // 为预处理器的 loader 传递自定义选项。比如传递给
    // sass-loader 时，使用 `{ sass: { ... } }`。
    loaderOptions: {},

    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    modules: false
  },

  // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`
  // 在多核机器下会默认开启。
  parallel: require('os').cpus().length > 1,

  // PWA 插件的选项。
  // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md
  pwa: {},

  // 配置 webpack-dev-server 行为。
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: 'localhost',
  //   port: 8888,
  //   https: false,
  //   hotOnly: false,
  //   open: true,
  // },

  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => {
        // 修改它的选项...
        // options.limit = 10000
        return options
      })

    if (process.env.NODE_ENV === "production") {
      console.log('ppppppppp');
      console.log(process.env.NODE_ENV);
      config.plugin("extract-css").tap(() => [{
        path: path.join(__dirname, "./dist"),
        filename: "css/[name].[contenthash:8].css"
      }]);

    } else {
      console.log('ttttttttt');
      console.log(process.env.NODE_ENV);
      config.plugin("extract-css").tap(() => [{
        path: path.join(__dirname, "./dist"),
        filename: "css/[name].css"
      }]);
    }
    // if (process.env.npm_config_report) {
    // 	config
    // 		.plugin('webpack-bundle-analyzer')
    // 		.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    // }
  },
  configureWebpack: config => {

    Object.assign(config, { // 开发生产共同配置
      resolve: {
        extensions: ['.js', '.vue'],
        alias: {
          '@': path.resolve(__dirname, './src'),
          '@utils': path.resolve(__dirname, './src/utils'),
        }
      },
    })
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(
        new CompressionWebpackPlugin({
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|html|css)$/,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    } else {
      // 为开发环境修改配置...
      console.log(2222, config.plugins);

    }

    // if (process.env.npm_config_report) {
    // 	config.plugins.push(
    // 		new BundleAnalyzerPlugin()
    // 	);
    // }
  }
}
