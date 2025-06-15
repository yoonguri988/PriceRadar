/** @jsxImportSource @emotion/react */
import { CardStyles, ProductCardProps } from "@/features/product";
import { Star } from "lucide-react";

export const ProductCard = ({
  name,
  price,
  imageUrl,
  seller: sellerName,
  reviewCount,
  shippingInfo,
  isSoldOut = false,
  originalPrice,
  badges,
  isFavorite = false,
  onClick,
  onFavoriteToggle,
}: ProductCardProps) => {
  return (
    <div css={CardStyles.card} onClick={onClick}>
      <div css={CardStyles.imageWrapper}>
        <img src={imageUrl} alt={name} />
      </div>

      <div css={CardStyles.info}>
        {Array.isArray(badges) && badges.length > 0 && (
          <div css={CardStyles.badgeGroup}>
            {badges.map(({ text, color }, i) => (
              <span key={i} css={CardStyles.dynamicBadge(color)}>
                {text}
              </span>
            ))}
          </div>
        )}
        <p css={name}>{name}</p>
        {originalPrice && (
          <p css={originalPrice}>{originalPrice.toLocaleString()}원</p>
        )}
        <p css={price}>{price.toLocaleString()}원</p>
        {isSoldOut && <p css={CardStyles.soldOut}>품절</p>}
        {sellerName && <p css={CardStyles.seller}>판매처: {sellerName}</p>}
        {typeof reviewCount === "number" && (
          <p css={CardStyles.review}>
            <Star size={14} className="icon" /> {reviewCount} 리뷰
          </p>
        )}
        {shippingInfo && <p css={CardStyles.shipping}>{shippingInfo}</p>}
        {onFavoriteToggle && (
          <button
            css={CardStyles.favoriteButton}
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle();
            }}
            disabled={isSoldOut} // 품절 시 버튼 비활성화
          >
            {isFavorite ? "★ 관심 해제" : "☆ 관심 등록"}
          </button>
        )}
      </div>
    </div>
  );
};
