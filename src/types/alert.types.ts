export type AlertState = {
  alerts: Record<string, number>; // productId -> targetPrice
  setAlert: (productId: string, price: number) => void;
  removeAlert: (productId: string) => void;
};
