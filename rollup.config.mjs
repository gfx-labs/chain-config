import typescript from 'rollup-plugin-ts'
import rollupJson from '@rollup/plugin-json';
import nodeGlobals from 'rollup-plugin-node-globals'
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy'
import { cleandir } from "rollup-plugin-cleandir";

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/browser.js',
      format: 'umd',
      name: "oku-chains",
      globals: {
        "viem/chains": "viem_chains",
      },
    },
    {
      file: 'dist/index-mjs.js',
      format: 'es',
    },
    {
      file: 'dist/index.js',
      format: 'cjs',
      name: "oku-chains",
    }
  ],
  plugins: [
    cleandir("./dist"),
    peerDepsExternal({}),
    typescript(),
    rollupJson({ compact: true }),
    nodeGlobals(),
    commonjs({}),
    copy({
      targets: [
        { src: 'static/networks/*', dest: 'dist/networks' },
      ]
    })
  ]
}
