import { render, screen } from '@testing-library/react';
import { EmptyState } from '@/components/ui/EmptyState';

describe('<EmptyState />', () => {
  it('타이틀과 설명이 표시되어야 한다', () => {
    render(
      <EmptyState
        title="결과가 없습니다."
        description="조건에 맞는 항목을 찾을 수 없습니다."
      />,
    );
    expect(screen.getByText('결과가 없습니다.')).toBeInTheDocument();
    expect(
      screen.getByText('조건에 맞는 항목을 찾을 수 없습니다.'),
    ).toBeInTheDocument();
  });

  it('action 요소가 렌더링 되어야 한다', () => {
    render(
      <EmptyState
        title="상품이 없습니다."
        description="선택한 조건에 맞는 상품이 없어요."
        action={<button>전체 상품 보기</button>}
      />,
    );
    expect(
      screen.getByRole('button', { name: '전체 상품 보기' }),
    ).toBeInTheDocument();
  });
});
