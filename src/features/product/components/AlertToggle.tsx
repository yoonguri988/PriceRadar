// src/features/product/components/AlertToggle.tsx

import { useState } from "react";
import { useAlertStore } from "@/store/useAlertStore";

type Props = {
  productId: string;
};

export const AlertToggle = ({ productId }: Props) => {
  const { alerts, setAlert, removeAlert } = useAlertStore();
  const [input, setInput] = useState("");
  const isSet = alerts[productId] !== undefined;

  const handleToggle = () => {
    if (isSet) {
      removeAlert(productId);
    } else {
      const value = parseInt(input, 10);
      if (!isNaN(value) && value > 0) {
        setAlert(productId, {
          productId,
          thresholdPrice: value,
          enabled: true,
        });
        setInput("");
      }
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {isSet ? (
        <>
          <p>
            🔔 {alerts[productId].thresholdPrice.toLocaleString()}원 이하 시
            알림 설정됨
          </p>
          <button onClick={handleToggle}>알림 해제</button>
        </>
      ) : (
        <>
          <input
            type="number"
            placeholder="가격 입력"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            min={1}
          />
          <button
            onClick={handleToggle}
            disabled={input.trim() === "" || parseInt(input, 10) <= 0}
          >
            알림 설정
          </button>
        </>
      )}
    </div>
  );
};
