import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import Terminal from "./Terminal";

const scrollIntoView = vi.fn();

beforeEach(() => {
  HTMLElement.prototype.scrollIntoView = scrollIntoView;
  scrollIntoView.mockClear();
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

function submit(command: string) {
  const input = screen.getByTitle("terminal-input");
  fireEvent.change(input, { target: { value: command } });
  fireEvent.submit(input.closest("form")!);
}

describe("terminal command output", () => {
  it("reveals the start of new output and preserves earlier output", () => {
    render(<Terminal />);
    submit("experience");
    const experience = screen.getByTestId("experience");
    expect(scrollIntoView).toHaveBeenLastCalledWith({ block: "start" });
    expect(scrollIntoView.mock.instances.at(-1)).toBe(
      experience.parentElement?.parentElement
    );
    expect(experience.textContent).toContain("2025/08");
    expect(experience.textContent).not.toMatch(/Daneshjooyar|Manian|FreeLance/);
    submit("publications");
    expect(screen.getByTestId("publications").textContent).toContain("Manian");
    expect(screen.getByTestId("experience")).toBe(experience);
  });

  it("focuses the prompt without scrolling away from the output", async () => {
    const focus = vi.spyOn(HTMLInputElement.prototype, "focus");
    render(<Terminal />);
    submit("experience");
    await new Promise((resolve) => setTimeout(resolve, 20));
    expect(focus).toHaveBeenLastCalledWith({ preventScroll: true });
  });
});
