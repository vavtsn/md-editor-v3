/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const dts = require('vite-plugin-dts');

(async () => {
  await build({
    plugins: [
      vue(),
      vueJsx(),
      dts({
        include: [
          '../MdEditor/type.ts',
          '../MdEditor/Editor.tsx',
          '../MdEditor/NormalToolbar.tsx',
          '../MdEditor/DropdownToolbar.tsx',
          '../MdEditor/index.ts'
        ]
      })
    ],
    css: {
      modules: {
        localsConvention: 'camelCase'
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    build: {
      outDir: path.resolve(__dirname, '../lib'),
      lib: {
        entry: path.resolve(__dirname, '../MdEditor'),
        name: 'MdEditorV3'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  });
})();
