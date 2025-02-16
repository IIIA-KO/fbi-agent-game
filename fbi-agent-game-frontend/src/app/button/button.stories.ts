import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

const Template: StoryObj<ButtonComponent> = {
  render: (args) => ({
    props: args,
  }),
};

export const Primary = {
  ...Template,
  args: {
    size: 'medium',
    color: 'primary',
    disabled: false,
    children: 'Primary Button',
  },
};

export const Secondary = {
  ...Template,
  args: {
    size: 'medium',
    color: 'secondary',
    disabled: false,
    children: 'Secondary Button',
  },
};

export const Disabled = {
  ...Template,
  args: {
    size: 'medium',
    color: 'primary',
    disabled: true,
    children: 'Disabled Button',
  },
};
