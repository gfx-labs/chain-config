import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupJson from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs';


const browserConfig = {
  input: 'src/index.ts',
  external: ["viem", "viem/chains"],
  output: [
    {
      file: 'dist/browser.js',
      format: 'umd',
      name: "oku-chains",
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    {
      file: 'dist/index-mjs.js',
      format: 'es',
    }
  ],
  plugins: [
    typescript(),
    nodeResolve({
      browser: true,
      jsnext: true,
      preferBuiltins: true,
    }),
    rollupJson({ compact: true }),
    nodeGlobals(),
  ]
}

const nodeConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      name: "oku-chains",
    }
  ],
  external: ["viem", "viem/chains"],
  plugins: [
    typescript(),
    nodeResolve({
      browser: false,
      jsnext: true,
      preferBuiltins: true,
    }),
    rollupJson({ compact: true }),
    nodeGlobals(),
    commonjs({}),
  ]
}


export default [
  browserConfig,
  nodeConfig,
];
