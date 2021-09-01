import { defineComponent, onMounted, ref } from 'vue';
import Header from './Header';
// import Preview from './Preview';
// import Doc from './Doc';

import './style.less';

export type Theme = 'dark' | 'light';

export default defineComponent({
  setup() {
    const theme = ref<Theme>('light');

    onMounted(() => {
      if (import.meta.env.MODE === 'preview') {
        const hm = document.createElement('script');
        hm.src = 'https://hm.baidu.com/hm.js?1563bc52cb27ffbc7b5b46cdfc327ce0';
        document.head.appendChild(hm);
      }
    });

    return () => (
      <div class={['app', theme.value === 'dark' && 'theme-dark']}>
        <Header theme={theme.value} onChange={(v: Theme) => (theme.value = v)} />
        <router-link to="/">Home</router-link>
        <router-link to="/doc">文档</router-link>
        <div class="page-body">
          {/* <Preview theme={theme.value} /> */}
          {/* <Doc theme={theme.value} /> */}
          <router-view />
        </div>
      </div>
    );
  }
});
