import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import process from 'process';
import * as path from 'path';

const base =
  process.env.NODE_ENV === 'production' ? '/QuickMart/' : '/QuickMart';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/custom.scss";`,
      },
    },
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve(process.cwd(), 'src'),
  //   },
  // },
});
