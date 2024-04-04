import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FormField } from "@/components/FormField";

type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
} satisfies Meta<typeof FormField>;

export default meta;

export const Formfield: Story = {
  args: {
    type: "email",
  },
};
