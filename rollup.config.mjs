import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import rollupJson from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs';

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
  nodeConfig,
];
