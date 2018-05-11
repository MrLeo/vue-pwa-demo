module.exports = {
  baseUrl: '/html/statistics/',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/c-cp/': {
        target: 'http://localhost:8100',
        changeOrigin: true,
      },
    },
    before: app => {
      // app is an express instance
    },
  },
}
