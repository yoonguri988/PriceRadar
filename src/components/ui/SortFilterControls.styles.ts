// src/components/ui/styles/SortFilterControls.styles.ts

import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const buttonGroupStyle = css`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const sortButtonStyle = (selected: boolean) => css`
  background: ${selected ? "#333" : "#f0f0f0"};
  color: ${selected ? "#fff" : "#000"};
  border: none;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  position: relative;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
`;

export const activeDotStyle = css`
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 6px;
  height: 6px;
  background: #007aff;
  border-radius: 50%;
  transform: translateX(-50%);
`;

export const filterSelectStyle = css`
  width: fit-content;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  color: #333;
`;
