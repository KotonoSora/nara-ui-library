import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./index";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    theme: {
      control: "select",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    theme: "default",
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Typography300: Story = {
  args: {
    text: "Open Sans 300",
    weight: 300,
  },
};

export const Typography400: Story = {
  args: {
    text: "Open Sans 400",
    weight: 400,
  },
};

export const Typography500: Story = {
  args: {
    text: "Open Sans 500",
    weight: 500,
  },
};

export const Typography600: Story = {
  args: {
    text: "Open Sans 600",
    weight: 600,
  },
};

export const Typography700: Story = {
  args: {
    text: "Open Sans 700",
    weight: 700,
  },
};

export const Typography800: Story = {
  args: {
    text: "Open Sans 800",
    weight: 800,
  },
};
