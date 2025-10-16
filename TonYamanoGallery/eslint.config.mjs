import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.{js,mjs,ts,vue}'],
    ignores: ['.nuxt/**', 'node_modules/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue: pluginVue
    },
    rules: {
      ...js.configs.recommended.rules,
      ...pluginVue.configs['vue3-essential'].rules
    }
  },
  prettier
]
