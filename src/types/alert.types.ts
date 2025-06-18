export interface AlertSetting {
  productId: string;
  thresholdPrice: number;
  enabled: boolean;
}

export interface AlertStore {
  alerts: Record<string, AlertSetting>;
  toggleAlert: (productId: string) => void;
  setThreshold: (productId: string, price: number) => void;
  setAlert: (productId: string, alert: AlertSetting) => void;
  removeAlert: (productId: string) => void;
}
