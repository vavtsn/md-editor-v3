import path from 'path';
import { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import nodeService from './vitePlugins/nodeService';

export default ({ mode }: ConfigEnv): UserConfigExport => {
  console.log('mode：', mode);

  return {
    base: '/',
    publicDir: './dev/public',
    server: {
      host: 'localhost',
      open: true,
      port: 3344,
      https: false
    },
    resolve: {
      alias: {
        // 键必须以斜线开始和结束
        '@': path.resolve(__dirname, './dev')
      }
    },
    plugins: [vue(), vueJsx(), nodeService()],
    css: {
      modules: {
        localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  };
};
