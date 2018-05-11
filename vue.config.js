// github.com/vuejs/vue-cli/blob/dev/docs/config.md
module.exports = {
  baseUrl: '/vue-pwa-demo/',
  outputDir: 'docs',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {
      // app is an express instance
    },
  },
}
