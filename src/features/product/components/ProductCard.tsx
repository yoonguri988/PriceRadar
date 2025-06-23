import { ProductCardProps } from '@/features/product';
import { Star } from 'lucide-react';

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
    <div className={``} onClick={onClick}>
      <div className={``}>
        <img src={imageUrl} alt={name} />
      </div>

      <div className={``}>
        {Array.isArray(badges) && badges.length > 0 && (
          <div className={``}>
            {badges.map(({ text, color }, i) => (
              <span key={i} className={``}>
                {text}
              </span>
            ))}
          </div>
        )}
        <p className={name}>{name}</p>
        {originalPrice && (
          <p className={``}>{originalPrice.toLocaleString()}원</p>
        )}
        <p className={``}>{price.toLocaleString()}원</p>
        {isSoldOut && <p className={``}>품절</p>}
        {sellerName && <p className={``}>판매처: {sellerName}</p>}
        {typeof reviewCount === 'number' && (
          <p className={``}>
            <Star size={14} className="icon" /> {reviewCount} 리뷰
          </p>
        )}
        {shippingInfo && <p className={``}>{shippingInfo}</p>}
        {onFavoriteToggle && (
          <button
            className={``}
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle();
            }}
            disabled={isSoldOut} // 품절 시 버튼 비활성화
          >
            {isFavorite ? '★ 관심 해제' : '☆ 관심 등록'}
          </button>
        )}
      </div>
    </div>
  );
};
