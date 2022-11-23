module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'vue/setup-compiler-macros': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'vue/no-v-model-argument': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-multiple-template-root': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-console': 'off',
    'semi': 'error',
    'eqeqeq': 'error',
    'quotes': ['error', 'single'],
    'no-var': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'no-trailing-spaces': 'error',
    'arrow-parens': 'off',
    'no-alert': 'warn',
    'no-debugger': 'warn',
    'prefer-const': 'warn',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/ban-types': 'off',
    'comma-dangle': 'off',
    'no-duplicate-imports': [
      1,
      {
        includeExports: true
      }
    ]
  }
};
