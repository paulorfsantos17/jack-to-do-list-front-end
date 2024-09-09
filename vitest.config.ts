import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    setupFiles: './tests/setup.ts',
    environment: 'happy-dom',
    include: ['./src/**/*.spec.tsx'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,ts,tsx}'],
    },
  },
})
