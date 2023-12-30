import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
