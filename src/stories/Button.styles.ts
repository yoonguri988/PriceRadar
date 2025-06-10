// src/components/ui/Button.styles.ts
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

// 공통 스타일
export const baseStyle = css`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s ease;
`;

// 크기별 스타일
export const sizeStyle = {
  sm: css`
    font-size: 12px;
    padding: 4px 10px;
  `,
  md: css`
    font-size: 16px;
    padding: 8px 16px;
  `,
  lg: css`
    font-size: 18px;
    padding: 12px 20px;
  `,
};

// 버튼 스타일
export const variantStyle = {
  primary: css`
    background-color: #7346f3;
    color: #ffffff;
    border: none;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: transparent;
    color: #7346f3;
    border: 1px solid #7346f3;

    &:hover {
      background-color: #f3f0ff;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
};

// 아이콘 스타일
export const iconLeftStyle = css`
  margin-right: 8px;
  display: inline-flex;
  align-items: center;
`;

export const iconRightStyle = css`
  margin-left: 8px;
  display: inline-flex;
  align-items: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const spinnerStyle = css`
  width: 16px;
  height: 16px;
  border: 2px solid #ffffff;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
  margin-right: 8px;
  display: inline-block;
  vertical-align: middle;
`;
