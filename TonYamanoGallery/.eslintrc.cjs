module.exports = {
  root: true,
  extends: [
    'standard',
    'plugin:vue/vue3-recommended'
  ],
  plugins: ['vue'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
