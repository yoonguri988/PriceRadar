/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const card = css`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  }
`;

export const imageWrapper = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-color: #f2f2f2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const info = css`
  padding: 12px;
`;

export const name = css`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-bottom: 6px;
  line-height: 1.4;
`;

export const price = css`
  font-size: 16px;
  font-weight: 700;
  color: #7346f3;
  margin-bottom: 8px;
`;

export const seller = css`
  font-size: 12px;
  color: #757575;
  margin-bottom: 6px;
`;

export const review = css`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #757575;
  margin-bottom: 6px;

  .icon {
    margin-right: 4px;
  }
`;

export const shipping = css`
  font-size: 12px;
  color: #34a853; /* green for free shipping, else default */
  margin-bottom: 10px;
`;

export const favoriteButton = css`
  font-size: 12px;
  color: #7346f3;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const badgeGroup = css`
  display: flex;
  gap: 4px;
  margin-bottom: 6px;
  flex-wrap: wrap;
`;

// 품절 상태, 할인 표시, 배지 적용
export const badge = css`
  font-size: 10px;
  background-color: #7346f3;
  color: #fff;
  padding: 2px 6px;
  border-radius: 8px;
`;

export const soldOut = css`
  font-size: 14px;
  color: #ff0000;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const originalPrice = css`
  font-size: 12px;
  color: #999;
  text-decoration: line-through;
  margin-bottom: 4px;
`;

// 뱃지 색상 다양화, 품절 상태일 때 버튼 비활성화
export const dynamicBadge = (color: string = "#7346f3") => css`
  font-size: 10px;
  background-color: ${color};
  color: #fff;
  padding: 2px 6px;
  border-radius: 8px;
`;
