import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

const meta = {
  title: 'UI/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '결과가 없습니다.',
    description: '조건에 맞는 항목을 찾을 수 없습니다.',
  },
};

export const WithAction: Story = {
  args: {
    title: '상품이 없습니다.',
    description: '선택한 조건에 맞는 상품이 없어요.',
    action: <Button>전체 상품 보기</Button>,
  },
};
export const WithCustomIcon: Story = {
  args: {
    title: '등록된 관심 상품이 없습니다',
    description: '상품을 추가하고 가격을 추적해보세요.',
    icon: <span style={{ fontSize: '2rem' }}>⭐️</span>,
  },
};
