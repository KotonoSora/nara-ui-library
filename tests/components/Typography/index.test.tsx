import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { Typography } from "@/components/Typography";

describe("Typography test", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<Typography text="Testing" />);
  });

  it("should render label", () => {
    render(<Typography text="Testing" />);
    screen.getByText("Testing");
  });
});
