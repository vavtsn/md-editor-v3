import { defineComponent, ref } from 'vue';
import Header from './Header';

import './style.less';

export type Theme = 'dark' | 'light';

export default defineComponent({
  setup() {
    const theme = ref<Theme>('light');

    return () => (
      <div class={['app', theme.value === 'dark' && 'theme-dark']}>
        <Header theme={theme.value} onChange={(v: Theme) => (theme.value = v)} />

        <div class="page-body">
          <router-view />
        </div>
      </div>
    );
  }
});
