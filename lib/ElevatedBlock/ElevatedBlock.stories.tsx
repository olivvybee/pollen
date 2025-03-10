import type { Meta, StoryObj } from '@storybook/react';
import { ElevatedBlock } from './ElevatedBlock';

const meta = {
  component: ElevatedBlock,
  tags: ['autodocs'],
} satisfies Meta<typeof ElevatedBlock>;

export default meta;
type Story = StoryObj<typeof ElevatedBlock>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ height: 100 }}>
        <p>This is an elevated block!</p>
      </div>
    ),
  },
};
