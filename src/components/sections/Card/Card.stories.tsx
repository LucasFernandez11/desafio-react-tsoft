import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { MemoryRouter } from 'react-router-dom';

const baseMock = {
  id: 42,
  title: 'The Shawshank Redemption',
  imagePath: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
  popularity: 9.3,
  description:
    'Un banquero es condenado por asesinato y debe sobrevivir a una brutal prisión mientras conserva la esperanza.',
  release_date: '1994-09-23',
  original_language: 'en',
  genres: ['Drama', 'Crimen'],
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="bg-zinc-900 min-h-screen text-white p-8 flex items-center justify-center">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#111' }],
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['hero', 'popular', 'continue', 'trailer', 'single'],
    },
  },
  args: {
    ...baseMock,
    layout: 'popular',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Historias específicas (cada una sobreescribe layout)
export const Hero: Story = {
  args: {
    layout: 'hero',
  },
};

export const Popular: Story = {
  args: {
    layout: 'popular',
  },
};

export const Continue: Story = {
  args: {
    layout: 'continue',
  },
};

export const Trailer: Story = {
  args: {
    layout: 'trailer',
  },
};

export const Single: Story = {
  args: {
    layout: 'single',
  },
};
