import { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

export default {
  title: 'ProgressBar',
  component: ProgressBarComponent,
} as Meta<ProgressBarComponent>;

const Template: StoryObj<ProgressBarComponent> = {
  render: (args) => ({
    props: args,
  }),
};

export const Low = {
  ...Template,
  args: {
    value: 20,
  },
};

export const Medium = {
  ...Template,
  args: {
    value: 50,
  },
};

export const High = {
  ...Template,
  args: {
    value: 80,
  },
};
