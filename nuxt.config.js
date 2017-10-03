module.exports = {
  head: {
    title: 'nuxt_text_from_scrach',
    titleTemplate: '%s - from_scrach',
    htmlAttrs: {
      'data-hoge': 'fuga'
    },
    bodyAttrs: {
      'data-body-hoge': 'body-fuga'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    style: [
      { cssText: '.test { color: red }', type: 'text/css' }
    ],
    script: [
      { innerHTML: '{ "@context: "http://schema.org"}', type: 'application/ld+json' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ]
  },
  loading: {
    color: 'orange',
    failedColor: 'purple',
    height: '5px',
    duration: 2500
  },
  srcDir: 'client/'
}
