import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { Logo } from "@/components/Logo";

describe("Typography test", () => {
  afterEach(cleanup);

  it("should render component", () => {
    render(<Logo />);
  });

  it("should render image", () => {
    render(<Logo />);

    // Get the image by its alt text or role
    const imgElement = screen.getByTestId("logo-element"); // Or use getByAltText('image alt text')

    // Check that the image is in the document
    expect(imgElement).toBeInTheDocument();

    // Check the src attribute
    expect(imgElement).toHaveAttribute("src", "/icons/vite.svg"); // Replace with expected src
  });
});
