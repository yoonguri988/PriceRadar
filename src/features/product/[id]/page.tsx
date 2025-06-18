"use client";

import styles from "@/features/product/styles/Page.module.scss";
import { useParams } from "next/navigation";
import { useProductDetail, AlertToggle } from "@/features/product";
import PriceChart from "@/features/chart/components/PriceChart";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useProductDetail(id as string);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError || !data) return <div>상품 정보를 불러올 수 없습니다.</div>;

  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.imageUrl} alt={data.name} />
      <div className={styles.info}>
        <h2>{data.name}</h2>
        <strong>{data.price.toLocaleString()}원</strong>
      </div>
      <div className={styles["chart-section"]}>
        <h3>가격 히스토리</h3>
        <PriceChart productId={data.id} />
      </div>
      {/* <div className={}>🔔 알림 설정 영역 (추후 구현)</div> */}
      <div className={styles["alert-placeholder"]}>
        <AlertToggle productId={data.id} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
