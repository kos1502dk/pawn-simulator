// vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test/unit/setup.ts',
    globals: true,
    css: true,
    include: ['test/unit/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/*.d.ts',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/__tests__/**',
        '**/tests/**',
        'src/app/**', // usually exclude routes/layout boilerplate
        'src/**/*.stories.{ts,tsx}',
        'src/**/index.{ts,tsx}', // optional (barrel files)
        'src/**/types/**', // optional
      ],
      // In production, we want to enforce coverage thresholds
      // thresholds: {
      //   lines: 90,
      //   functions: 90,
      //   branches: 90,
      //   statements: 90,
      // },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
