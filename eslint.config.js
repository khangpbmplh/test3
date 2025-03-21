import next from '@next/eslint-plugin-next';
import js from '@eslint/js';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': next,
    },
    rules: {
      // Thêm các rules tùy chỉnh của bạn ở đây
    },
  },
  js.configs.recommended,
]; 