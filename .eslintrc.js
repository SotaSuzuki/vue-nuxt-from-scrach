module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // *.vue ファイルを lint するのに必要
  plugins: [
    'html'
  ],
  // カスタムルールはこれ以下に設定
  rules: {},
  globals: {}
}
