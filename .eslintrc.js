// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
        // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 文件末尾强制换行
    "eol-last":0,
    "no-debugger":2,
    // 禁止 function 定义中出现重名参数
    "no-dupe-args":2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys":2,
    // 禁止重复的 case 标签
    "no-duplicate-case":2,
    // 双峰驼命名格式
    "camelcase":1,
    // 强制使用一致的反勾号、双引号或单引号
    "quotes": [2,"single","avoid-escape"],
    "eqeqeq": [1,"allow-null"],
    // 禁用 eval()
    "no-eval":2,
    // 强制分号之前和之后使用一致的空格
    "semi-spacing":0,
    // 要求同一个声明块中的变量按顺序排列
    "sort-vars":0,
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2,"always"],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2,"always"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2,"never"],
    // 要求操作符周围有空格
    "space-infix-ops":2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [2, {"words":true,"nonwords":false}],
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {"max":2}],
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs":2,
    "indent": [2,2, {"SwitchCase":1}],
    "no-new": 0,
    "no-throw-literal": 0
  }
}
