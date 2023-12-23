import { useState } from 'react';
import { useArgs } from '@storybook/preview-api';
import type { Meta, StoryObj } from '@storybook/react';

import { Rating } from './Rating';

const meta = {
  title: 'common/Rating',
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],

  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    count: 2,
  },
};

export const Size: Story = {
  args: {
    size: 30,
    count: 2,
  },
};

export const Custom = {
  args: {
    count: 1,
  },

  render: function Render() {
    // const [count, setCount] = useState(0);

    // @link https://storybook.js.org/docs/writing-stories/args#setting-args-from-within-a-story

    const [args, setArgs] = useArgs();

    console.log('args', args);

    const handleChange = (count: number) => {
      // setCount(count);
      setArgs({
        count,
      });
    };

    return (
      <div>
        <Rating onChange={handleChange} />
        <span>count: ${args.count}</span>
      </div>
    );
  },
};
