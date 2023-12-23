import type { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/components/common/Flex/Flex';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'common/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    width: 100,
    height: 100,
  },
};

// main 페이지의 상품 아이템 리스트 skeleton
export const ListItem: Story = {
  args: {
    ...Default.args,
  },

  render: () => {
    return (
      <Flex direction="column" gap="10px">
        <Skeleton width={171} height={207} />

        <Flex direction="column" gap="2px">
          <Skeleton width={100} height={22.5} />
          <Skeleton width={50} height={17.5} />
          <Skeleton width={35} height={16} />
        </Flex>
      </Flex>
    );
  },
};
