import CounterButton from './CounterButton.vue';

import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button/CounterButton',
  component: CounterButton,
} as Meta<typeof CounterButton>;

export const Primary: StoryFn<typeof CounterButton> = () => ({
  components: { CounterButton },
  template: '<CounterButton/>',
});