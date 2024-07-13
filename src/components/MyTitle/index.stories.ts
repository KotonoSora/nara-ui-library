import type { Meta, StoryObj } from "@storybook/react";

import { MyTitle } from "./index";

const meta = {
  component: MyTitle,
} satisfies Meta<typeof MyTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label",
  },
};
