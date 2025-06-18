/**
 * @todo 알림 설정 상태 관리
 */
import { create } from "zustand";
import { AlertStore, AlertSetting } from "@/types/alert.types";

export const useAlertStore = create<AlertStore>((set) => ({
  alerts: {},

  toggleAlert: (productId) =>
    set((state) => {
      const prev: AlertSetting = state.alerts[productId] ?? {
        productId,
        thresholdPrice: 0,
        enabled: false,
      };
      return {
        alerts: {
          ...state.alerts,
          [productId]: {
            ...prev,
            enabled: !prev.enabled,
          },
        },
      };
    }),

  setThreshold: (productId, price) =>
    set((state) => {
      const prev: AlertSetting = state.alerts[productId] ?? {
        productId,
        thresholdPrice: 0,
        enabled: false,
      };
      return {
        alerts: {
          ...state.alerts,
          [productId]: {
            ...prev,
            thresholdPrice: price,
            enabled: true,
          },
        },
      };
    }),

  setAlert: (productId, alert: AlertSetting) =>
    set((state) => ({
      alerts: {
        ...state.alerts,
        [productId]: alert,
      },
    })),

  removeAlert: (productId) =>
    set((state) => {
      const { [productId]: _, ...rest } = state.alerts;
      return { alerts: rest };
    }),
}));
