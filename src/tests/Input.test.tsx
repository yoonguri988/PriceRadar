import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/Input';

describe('<Input />', () => {
  it('placeholder가 표시되어야 한다', () => {
    render(<Input placeholder="상품명을 입력하세요" />);
    expect(
      screen.getByPlaceholderText('상품명을 입력하세요'),
    ).toBeInTheDocument();
  });

  it('error 메시지가 렌더링 되어야 한다', () => {
    render(<Input error="입력값이 필요합니다" />);
    expect(screen.getByText('입력값이 필요합니다')).toBeInTheDocument();
  });
});
