/**
 * @description
 * { Meta, StoryObj }는 자동 타입 추론 + Docs 호환성이 좋음
 */

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";
import { Search } from "lucide-react";

const meta = {
  title: "Components/ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    onClick: { action: "clicked" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "확인",
    variant: "primary",
    disabled: false,
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "취소",
    variant: "secondary",
  },
};

export const Disabled: Story = {
  args: {
    children: "비활성",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    children: "작은 버튼",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "큰 버튼",
    size: "lg",
  },
};

export const WithIcon: Story = {
  args: {
    children: "검색",
    icon: <Search size={16} />,
    iconPosition: "left",
  },
};

export const Loading: Story = {
  args: {
    children: "로딩 중...",
    isLoading: true,
  },
};
