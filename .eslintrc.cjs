
  module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'prettier', // Add prettier here to avoid conflicts with other rules
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'postcss.config.js', 'tailwind.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.json', // Point ESLint to your tsconfig.json
      ecmaFeatures: {
          jsx: true
      }
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: ['react', 'react-refresh', '@typescript-eslint'],
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ new JSX transform
      '@typescript-eslint/explicit-function-return-type': 'off', // Optional: Allow implicit return types
      '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Warn about unused vars
      'no-unused-vars': 'off', // Disable base rule as '@typescript-eslint/no-unused-vars' is used
      'prettier/prettier': 'off', // Disable prettier rule run by eslint, let prettier CLI handle it
    },
  };
  