// nuxt.config.js
module.exports = {
  mode: 'universal',
  head: {
    title: 'ssr-aws-lambda-nustjs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'Server Side Renreder app with AWS Lambda and NuxtJs', name: 'Server Side Renreder app with AWS Lambda and NuxtJs', content: '48_ssr-aws-lambda-nustjs' }
    ]
  },
  build: {
    vendor: ['axios'],
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/` // <= add the path to the cached files
  },
  srcDir: 'client/',
  performance: {
    gzip: false
  },
  router: {
    base: `/`
  },
  dev: false
};