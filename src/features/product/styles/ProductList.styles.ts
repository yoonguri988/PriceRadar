/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// Grid에 맞춰 카드 정렬 UI 구현
export const gridContainer = css`
  display: grid;
  gap: 24px;

  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  @media (max-width: 768px) {
    gap: 16px;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
`;

export const emptyState = css`
  padding: 40px;
  text-align: center;
  font-size: 16px;
  color: #757575;
`;

export const errorState = css`
  padding: 40px;
  text-align: center;
  font-size: 16px;
  color: #ff0000;
`;

export const loadingState = css`
  padding: 40px;
  text-align: center;
  font-size: 16px;
  color: #7346f3;
`;

export const filterBar = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  gap: 8px;

  select {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

export const loader = css`
  padding: 2rem 0;
  text-align: center;
  color: #888;
  font-size: 0.95rem;
`;
