module.exports = {
  plugins: ['node', 'prettier'],
  extends: ['eslint:recommended', 'plugin:node/recommended', 'plugin:json/recommended', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'block-scoped-var': 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'eol-last': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'no-var': 'error',
    'no-constant-condition': 'off',
    'no-process-exit': 'off',
    'no-trailing-spaces': 'error',
    'no-dupe-class-members': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    'node/no-missing-import': 'off',
    'node/no-empty-function': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-require': 'off',
    'node/shebang': 'off',
    'node/no-unpublished-import': [
      'error',
      {
        allowModules: ['tsconfig-paths', '@midwayjs/mock'],
      },
    ],
    'require-atomic-updates': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',

        // @TODO 后续把Eslint的strict检查模式打开
        // 'plugin:@typescript-eslint/strict',

        // 打开类型检查，会让eslint检查时间多一倍以上，暂且先关闭
        // 'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      rules: {
        // 因为在Jest里需要定义global全局变量，使用了ts的namespace的用法
        // 这里暂且将此规则关闭，后续看看有没有更好的方法，不使用namespace定义全局变量
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'prefer-const': 'off',
        // 定义了变量，但未使用
        // 0 = off 关闭
        // 1 = warn 警告
        // 2 = error 报错
        // note you must disable the base rule as it can report incorrect errors
        // 'no-unused-vars': 'off',
        // '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
  ignorePatterns: [],
  env: {
    jest: true,
  },
};
