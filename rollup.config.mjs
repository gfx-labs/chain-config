import typescript from '@rollup/plugin-typescript';
import rollupJson from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs';


const browserConfig = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/browser.js',
      format: 'umd',
      name: "jsrpc",
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
      name: "jsrpc",
    }
  ],
  external: ["ws", "isomorphic-ws"],
  plugins: [
    typescript(),
    rollupJson({ compact: true }),
    nodeGlobals(),
    commonjs({}),
  ]
}


export default [
  browserConfig,
  nodeConfig,
];
