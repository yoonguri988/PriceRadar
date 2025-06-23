import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('<Button />', () => {
  it('기본 버튼이 렌더링 되어야 한다', () => {
    render(<Button>확인</Button>);
    expect(screen.getByRole('button', { name: '확인' })).toBeInTheDocument();
  });

  it('disabled 상태로 렌더링 되어야 한다', () => {
    render(<Button disabled>비활성</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
