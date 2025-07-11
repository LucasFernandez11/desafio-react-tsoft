import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#111' }],
    },
  },
  argTypes: {
    id: {
      control: { type: 'number', min: 0 },
      description: 'Usado para variar el color del chip.',
    },
    label: {
      control: 'text',
      description: 'Texto mostrado dentro del chip.',
    },
    className: {
      control: 'text',
      description: 'Clases adicionales para modificar estilo.',
    },
    onClick: {
      action: 'clicked',
      description: 'Función llamada al hacer click.',
    },
  },
  args: {
    id: 2,
    label: 'Comedia',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {};

export const CustomColor: Story = {
  args: {
    id: 5,
    label: 'Acción',
  },
};

export const WithCustomClass: Story = {
  args: {
    id: 3,
    label: 'Drama',
    className: 'uppercase tracking-wider',
  },
};

export const Clickable: Story = {
  args: {
    id: 1,
    label: 'Ver más',
  },
};
