import OraclePageView from './OraclePageView.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'page/oraclepageview',
  component: OraclePageView,
} as Meta<typeof OraclePageView>;

export const Primary: StoryFn<typeof OraclePageView> = () => ({
  components: { OraclePageView },
  template: '<OraclePageView/>',
});