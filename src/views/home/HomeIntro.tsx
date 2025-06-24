import * as styles from './HomeIntro.styles';

export const HomeIntro = () => (
  <section className={styles.container}>
    <h1 className={styles.title}>스마트한 소비, PriceRadar로 시작하세요</h1>
    <p className={styles.context}>
      관심 상품 가격을 추적하고 알림을 받아보세요.
    </p>
  </section>
);
