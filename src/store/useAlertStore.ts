/**
 * @description 알림 설정 상태 관리
 *
 */

import { AlertState } from "@/types/alert.types";
import { create } from "zustand";

export const useAlertStore = create<AlertState>((set) => ({
  alerts: {},
  setAlert: (productId, price) =>
    set((state) => ({
      alerts: { ...state.alerts, [productId]: price },
    })),
  removeAlert: (productId) =>
    set((state) => {
      const { [productId]: _, ...rest } = state.alerts;
      return { alerts: rest };
    }),
}));
