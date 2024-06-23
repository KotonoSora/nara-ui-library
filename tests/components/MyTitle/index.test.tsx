import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, vi, expect } from "vitest";
import { MyTitle } from "@/components/MyTitle";

describe("MyTitle test:", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<MyTitle label="Testing" />);
  });

  it("should render label", () => {
    render(<MyTitle label="Testing" />);
    screen.getByText("Testing");
  });

  it("should be disabled", () => {
    render(<MyTitle label="Testing" disabled />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("onClick triggers properly", async () => {
    const mockFn = vi.fn();
    render(<MyTitle onClick={mockFn} label="Testing" />);
    expect(mockFn).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("disabled prevents action", async () => {
    const mockFn = vi.fn();
    render(<MyTitle onClick={mockFn} label="Testing" disabled />);
    expect(mockFn).toHaveBeenCalledTimes(0);
    fireEvent.click(screen.getByRole("button"));
    expect(mockFn).toHaveBeenCalledTimes(0);
  });
});
