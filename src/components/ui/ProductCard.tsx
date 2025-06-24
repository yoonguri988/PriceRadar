import Image from 'next/image';
import { ProductCardProps } from '@/types/product.type';
import * as styles from './ProductCard.styles';
import { ChevronRight, Heart, Star } from 'lucide-react';

export const ProductCard = ({ sect, product, onClick }: ProductCardProps) => {
  const {
    name,
    price,
    originalPrice,
    imageUrl,
    seller,
    shippingInfo,
    rating,
    reviewCount,
    isSoldOut,
    badges,
    liked,
  } = product;
  const percent = Math.round(((originalPrice - price) / originalPrice) * 100);
  const disCount = originalPrice !== 0;
  const popSectYn = sect === 'popular';

  return (
    <div className={`${styles.container} relative`}>
      {/* {isSoldOut && <div className={styles.soldOutOverlay}>품절</div>} */}
      <div className={styles.imageContent}>
        <Image
          src={imageUrl}
          alt={name}
          width={210}
          height={210}
          className="rounded object-cover bg-home-cardBg"
        />
        <span className="relative">
          <Heart
            className={liked ? styles.favoriteIcon : styles.favoriteIconFill}
          />
        </span>
      </div>
      {!popSectYn && (
        <div className={styles.badgeList}>
          {badges.map((badge, i) => (
            <span
              key={i}
              className={styles.badgeItem}
              style={{ backgroundColor: badge.color }}
            >
              {badge.text}
            </span>
          ))}
        </div>
      )}
      {!popSectYn && (
        <div className={styles.sellerContent}>
          <span>{seller}</span>
          <span className="pt-0.5">
            <ChevronRight size={12} className="text-gray-500" />
          </span>
        </div>
      )}
      <div className={styles.title}>{name}</div>
      <div className={styles.priceContent}>
        {disCount && (
          <div className={styles.priceOrigin}>
            {originalPrice.toLocaleString()}원
          </div>
        )}
        <div className={styles.priceOriginContent}>
          {disCount && <span className={styles.discount}>{percent}%</span>}
          <span className={styles.price}>{price.toLocaleString()}원</span>
        </div>
      </div>
      <div>
        <span className={styles.shippingInfoItem}>{shippingInfo}</span>
      </div>
      <div className="flex flex-row gap-2">
        <div className={styles.rating}>
          <span className="pt-0.5">
            <Star className={styles.ratingStar} />
          </span>
          <span className={styles.ratingNum}>{rating}</span>
        </div>
        <div className={styles.review}>리뷰 {reviewCount}</div>
      </div>
    </div>
  );
};
