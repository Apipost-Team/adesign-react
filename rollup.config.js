import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

// rollup.config.js
export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'libs/index.js',
      format: 'esm',
      // 添加globals
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    external: ['react', 'react-dom', 'react-is', 'react-router', 'react/jsx-runtime'],
    plugins: [
      resolve(), // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      babel(),
      typescript(),
      image(),
      postcss({
        // Extract CSS to the same location where JS file is generated but with .css extension.
        extract: true,
        // Use named exports alongside default export.
        namedExports: true,
        // Minimize CSS, boolean or options for cssnano.
        minimize: true,
        // Enable sourceMap.
        sourceMap: true,
        // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
        extensions: ['.less', '.css'],
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'libs/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
