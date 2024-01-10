import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import process from 'process';

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
});

// export default defineConfig({
//   base: '/unilab-react-project/#',
//   plugins: [react()],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/assets/styles/variables.scss"; @import "./src/assets/styles/mixin.scss";`,
//       },
//     },
//   },
// });
