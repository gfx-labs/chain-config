//import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-ts'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupJson from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const browserConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/browser.js',
      format: 'umd',
      name: "oku-chains",
      globals: {
        'viem':'viem',
      },
    },
    {
      file: 'dist/index-mjs.js',
      format: 'es',
    }
  ],
  plugins: [
    peerDepsExternal({}),
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
  plugins: [
    peerDepsExternal({}),
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
