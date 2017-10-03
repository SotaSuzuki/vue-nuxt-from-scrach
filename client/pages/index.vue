<template>
  <div class="container">
    <h1>Hello {{ name }}!</h1>
    <h2>from assets directory</h2>
    <img src="~/assets/img_01.png">
    <h2>from static directory</h2>
    <img src="/img_01.png">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // コンポーネントコンポーネントのデータをセットする前に非同期の処理を行えるようにする
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出される
    return { name: 'Nuxt.js' }
  },
  fetch () {
    // ページの描画前にストアを満たすために使用される
  },
  head () {
    // head はこのページ向けのメタタグを設定する
    return {
      title: 'Hello!'
    }
  },
  // transition () {
    // ページに対して特定のトランジションを設定する
    // ※ 空にするとエラーになる
  // },
  validatte () {
    // dynamic routes に対する検証関数
  },
  // middleware () {
    // このページに対してミドルウェアを設定する
    // ※ 空にするとエラーになる
  // },
  scrollToTop () {
    // ページ描画前にトップにスクロールしたい場合に使用する
    // デフォルトは false
    return false
  }
}
</script>

<style>
  .container {
    background-color: cornflowerblue;
  }
  h1 {
    color: aquamarine;
    font-size: 100px;
  }
</style>
