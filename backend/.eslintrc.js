module.exports = {
  env: {
    es6: true,
  },
  parser: 'espree',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-var': 'error',
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      parserOptions: {
        ecmaVersion: 2021,
        project: 'tsconfig.json',
        tsconfigRootDir: __dirname
      },
      rules: {
        'prefer-const': ['error', { destructuring: 'all' }],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': [
          'error',
          {
            allowSingleExtends: true,
          },
        ],
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    },
  ],
};
