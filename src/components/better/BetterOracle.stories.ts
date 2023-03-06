// Button.stories.ts

import BetterOracle from './BetterOracleView.vue';

import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof BetterOracle> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'BetterOracle',
  component: BetterOracle,
  render: (args) => ({
    components: { BetterOracle },
    setup() {
      return { args };
    },
    template: '<BetterOracle v-bind="args" />',
  })
};

export default meta;
type Story = StoryObj<typeof BetterOracle>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/7.0/vue/api/csf
 * to learn how to use render functions.
 */
const defaultArgs = {
  modelValue: 'Something to Ask',
  answer: null
}

export const Primary: Story = {
  args: {
    ...defaultArgs
  },
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    answer:{
      answer: 'yes',
      forced: false,
      image: 'hello.jpg'
    }
  },
};