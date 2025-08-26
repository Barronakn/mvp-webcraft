import { render, screen, act } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import Hero from "@/app/(home)/_components/Hero";


describe("Hero component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test("correctly renders the main title", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /Bénin/i })
    ).toBeInTheDocument();
  });

  test("correctly renders the descriptive text", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Plongez dans un voyage authentique/i)
    ).toBeInTheDocument();
  });

  test("renders the CTA button with the icon", () => {
    render(<Hero />);
    const button = screen.getByRole("button", { name: /Commencer l’aventure/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-full");
  });

  test("displays all front and back images of the cards", () => {
    render(<Hero />);
    const fronts = ["Front 01", "Front 02", "Front 03"];
    const backs = ["Back 01", "Back 02", "Back 03"];

    fronts.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });

    backs.forEach((alt) => {
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    });
  });

  test("applies class rotate-y-180 on a card after 5 seconds", () => {
    render(<Hero />);
    const card01 = screen.getByAltText("Front 01").parentElement?.parentElement;

    expect(card01).not.toHaveClass("rotate-y-180");

    act(() => {
      jest.advanceTimersByTime(5000);
    });

    const flippedCards = document.querySelectorAll(".rotate-y-180");
    expect(flippedCards.length).toBeGreaterThanOrEqual(1);
  });
});


jest.useFakeTimers();

describe("Hero cleanup", () => {
  it("cleans up the interval when the component is unmounted", () => {
    const spy = jest.spyOn(global, "clearInterval");

    const { unmount } = render(<Hero />);
    unmount();

    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(spy).toHaveBeenCalled();
  });
});