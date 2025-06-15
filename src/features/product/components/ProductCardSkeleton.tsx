/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

export const ProductCardSkeleton = () => {
  return (
    <div css={card}>
      <div css={skeletonBox} />
      <div css={skeletonText(16)} />
      <div css={skeletonText(14)} />
      <div css={skeletonText(12)} />
    </div>
  );
};

const shimmer = keyframes`
  0% {
    background-position: -300px 0;
  }
  100% {
    background-position: 300px 0;
  }
`;

const shimmerStyle = css`
  background: linear-gradient(
    to right,
    #eeeeee 0%,
    #dddddd 20%,
    #eeeeee 40%,
    #eeeeee 100%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
  border-radius: 4px;
`;

const card = css`
  width: 100%;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 8px;
  background: #fff;
`;

const skeletonBox = css`
  width: 100%;
  height: 200px;
  background: #f2f2f2;
  border-radius: 6px;
  margin-bottom: 1rem;
  animation: pulse 1.5s infinite ease-in-out;
`;

const skeletonText = (height: number) => css`
  height: ${height}px;
  background: #e0e0e0;
  margin-bottom: 0.75rem;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`;

// Pulse 애니메이션
const pulse = css`
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
