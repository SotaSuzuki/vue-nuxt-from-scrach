import test from 'ava'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'path'

// nuxt と server インスタンスを保持する
// そうすることでテスト終了時にそれらをクローズできる
let nuxt = null

// Nuxt.js を初期化し localhost:4000 でリスニングするサーバを作成する
test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) }  catch (e) {}
  config.rootDir = rootDir
  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  nuxt.listen(4000, 'localhost')
})

// 生成された HTML のみをテストする例
test('Route / exits and render HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<h1 class="title">Hello Nuxt.js!</h1>'))
})

// DOM を経由してチェックするテストの例
test('Route / exits and render HTML with CSS applied', async t => {
  const window = await nuxt.renderAndGetWindow('http://localhost:4000')
  const element = window.document.querySelector('h1')
  t.not(element, null)
  t.is(element.textContent, 'Hello Nuxt.js!')
  t.is(element.className, 'title')
  t.is(window.getComputedStyle(element).color, 'black')
})

// サーバを閉じる
test.after('Closing server and nuxt.js', t => {
  nuxt.close()
})
