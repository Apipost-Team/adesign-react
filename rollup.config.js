import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import svg from '@svgr/rollup';



export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: "libs/index.js",
                format: 'es',
                sourcemap: true
            }
        ],
        external: ['react'],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            svg(),
            postcss({
                extract: true,
                extract: 'styles.css'
            }),
            terser()
        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'libs/index.d.ts', format: "es" }],
        external: [/\.(css|less)$/],
        plugins: [dts()],
    },
]
