import { defineComponent, ref } from 'vue';
import Header from './Header';
import Preview from './Preview';

import './style.less';

export type Theme = 'dark' | 'light';

export default defineComponent({
  setup() {
    const theme = ref<Theme>('light');

    return () => (
      <div class={['app', theme.value === 'dark' && 'theme-dark']}>
        <Header theme={theme.value} onChange={(v: Theme) => (theme.value = v)} />
        <router-link to="/">Home</router-link>
        <router-link to="/doc">文档</router-link>
        <div class="page-body">
          <Preview theme={theme.value} />
        </div>
      </div>
    );
  }
});
