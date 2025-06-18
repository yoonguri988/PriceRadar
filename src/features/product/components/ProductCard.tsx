import styles from "@/features/product/styles/ProductCard.module.scss";
import { ProductCardProps } from "@/features/product";
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
    <div className={styles.card} onClick={onClick}>
      <div className={styles["image-wrapper"]}>
        <img src={imageUrl} alt={name} />
      </div>

      <div className={styles.info}>
        {Array.isArray(badges) && badges.length > 0 && (
          <div className={styles.badgeGroup}>
            {badges.map(({ text, color }, i) => (
              <span key={i} className={styles[`badge-${color}`]}>
                {text}
              </span>
            ))}
          </div>
        )}
        <p className={name}>{name}</p>
        {originalPrice && (
          <p className={styles["original-price"]}>
            {originalPrice.toLocaleString()}원
          </p>
        )}
        <p className={styles.price}>{price.toLocaleString()}원</p>
        {isSoldOut && <p className={styles.soldOut}>품절</p>}
        {sellerName && <p className={styles.seller}>판매처: {sellerName}</p>}
        {typeof reviewCount === "number" && (
          <p className={styles.review}>
            <Star size={14} className="icon" /> {reviewCount} 리뷰
          </p>
        )}
        {shippingInfo && <p className={styles.shipping}>{shippingInfo}</p>}
        {onFavoriteToggle && (
          <button
            className={styles.favoriteButton}
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
