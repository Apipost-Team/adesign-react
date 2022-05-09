import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import reactSvgPlugin from 'vite-plugin-react-svg';

export default defineConfig({
  plugins: [
    react(),
    reactSvgPlugin({
      defaultExport: 'component',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'a-design',
      formats: ['es'],
      fileName: (format) => `index.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
        },
      },
    },
    outDir: 'libs',
  },
});
