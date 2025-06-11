/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const baseInput = css`
  border-radius: 6px;
  border: 1px solid #ccc;
  outline: none;
  width: 100%;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #7346f3;
  }

  &::placeholder {
    color: #757575;
  }

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

// 크기별 스타일
export const sizeStyle = {
  sm: css`
    padding: 6px 10px;
    font-size: 12px;
  `,
  md: css`
    padding: 10px 12px;
    font-size: 14px;
  `,
  lg: css`
    padding: 14px 16px;
    font-size: 16px;
  `,
};

export const labelStyle = css`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
`;

export const iconWrapper = css`
  position: relative;

  input {
    padding-left: 36px;
  }

  .icon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #757575;
  }
`;

export const helperTextStyle = css`
  margin-top: 4px;
  font-size: 12px;
  color: #757575;
`;

// 에러 스타일
export const errorStyle = css`
  border-color: #ff0000;
`;

export const errorMessageStyle = css`
  margin-top: 4px;
  font-size: 12px;
  color: #ff0000;
`;
