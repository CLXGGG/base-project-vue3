/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-trailing-spaces': 2, // 没有尾随空格
    'no-irregular-whitespace': ['off'], // 取消空格报错
    'no-unused-vars': 'off', // 定义了或者声明引入了，但没有使用不报错
    '@typescript-eslint/no-unused-vars': ['off'], //没有使用的参数，不会报错。因为个人觉的把可用的参数写上去 有利于以后的维护。
    '@typescript-eslint/no-empty-function':['off'], // 方法内部没有逻辑书写，不会报错，可以先定义好方法名，方便使用
    '@typescript-eslint/no-explicit-any':['off'], // ts 定义数据类型为any不报错
    // 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab
    'indent': ['error', 2],
    // 强制在花括号中使用一致的空格
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 控制逗号前后的空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    'semi': [2, 'never'],
    'vue/max-attributes-per-line': [2, {
      'singleline': 3,
      'multiline': 1
    }],
  },
}
