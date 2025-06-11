import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Input } from "./Input";
import { Search } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/ui/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "상품명을 입력하세요",
    size: "md",
  },
};

export const Error: Story = {
  args: {
    placeholder: "상품명을 입력하세요",
    error: "입력값이 필요합니다",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "비활성화됨",
    disabled: true,
  },
};

export const Large: Story = {
  args: {
    placeholder: "큰 입력창",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    placeholder: "작은 입력창",
    size: "sm",
  },
};

export const WithLabelAndHelper: Story = {
  args: {
    label: "상품 검색",
    placeholder: "상품명을 입력하세요",
    helperText: "예: 아이폰 15, 갤럭시 Z 플립",
  },
};

export const WithIcon: Story = {
  args: {
    label: "검색어",
    placeholder: "입력...",
    icon: <Search size={16} />,
  },
};

export const ErrorState: Story = {
  args: {
    label: "상품명",
    error: "상품명을 입력해주세요",
    placeholder: "입력하세요",
  },
};
