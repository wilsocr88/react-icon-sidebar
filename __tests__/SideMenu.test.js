/**
 * @jest-environment jsdom
 */
import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SideMenu from "../src";
import { MdStar } from "react-icons/md";

const defaultMenu = [
    {
        icon: MdStar,
        text: "Test",
        link: "/test",
    },
    {
        hr: true,
    },
];

const setViewportWidth = width => {
    Object.defineProperty(window, "innerWidth", {
        configurable: true,
        writable: true,
        value: width,
    });
};

beforeEach(() => {
    setViewportWidth(1024);
    window.history.pushState({}, "", "/");
});

test("renders core menu structure with expected default desktop state", () => {
    render(<SideMenu menu={defaultMenu} />);

    const menu = document.getElementById("menu");
    const button = screen.queryByRole("button", { name: /toggle menu/i });
    const link = screen.getByRole("link", { name: "Test" });
    const separator = screen.getByRole("separator");

    expect(menu).toBeInTheDocument();
    expect(menu).not.toHaveClass("hidden");
    expect(menu).toHaveStyle({ width: "4.5rem" });
    expect(button).toBeNull();

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
    expect(link).not.toHaveClass("active");
    expect(link).not.toHaveAttribute("aria-current");

    expect(separator).toBeInTheDocument();
});

test("mobile menu toggles open and closed", () => {
    setViewportWidth(600);
    render(<SideMenu menu={defaultMenu} />);

    const menu = document.getElementById("menu");
    const button = screen.getByRole("button", { name: /toggle menu/i });
    const whiteSpaceTarget = document.getElementById("menu-whitespace-target");

    expect(menu).toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(whiteSpaceTarget).toHaveAttribute("hidden");

    fireEvent.click(button);

    expect(menu).not.toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(whiteSpaceTarget).not.toHaveAttribute("hidden");

    fireEvent.click(whiteSpaceTarget);

    expect(menu).toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "false");
    expect(whiteSpaceTarget).toHaveAttribute("hidden");
});

test("active route marks corresponding menu item", () => {
    window.history.pushState({}, "", "/test");
    render(<SideMenu menu={defaultMenu} />);

    const link = screen.getByRole("link", { name: "Test" });
    expect(link).toHaveClass("active");
    expect(link).toHaveAttribute("aria-current", "page");
});

test("showToggle keeps the button visible on desktop and lets the menu hide", () => {
    render(<SideMenu menu={defaultMenu} showToggle />);

    const menu = document.getElementById("menu");
    const button = screen.getByRole("button", { name: /toggle menu/i });
    const whiteSpaceTarget = document.getElementById("menu-whitespace-target");

    expect(menu).not.toHaveClass("hidden");
    expect(menu).toHaveStyle({ width: "4.5rem" });
    expect(button).toHaveAttribute("aria-expanded", "true");
    expect(whiteSpaceTarget).toBeNull();

    fireEvent.click(button);

    expect(menu).toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "false");
});

test("force and min/max props clamp the rendered mode", () => {
    setViewportWidth(1400);

    const { rerender } = render(<SideMenu menu={defaultMenu} max="compact" />);
    expect(document.getElementById("menu")).toHaveStyle({ width: "4.5rem" });
    expect(screen.queryByRole("button", { name: /toggle menu/i })).toBeNull();

    rerender(<SideMenu menu={defaultMenu} force="mobile" />);

    const menu = document.getElementById("menu");
    const button = screen.getByRole("button", { name: /toggle menu/i });

    expect(menu).toHaveStyle({ width: "18.75rem" });
    expect(menu).toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);

    expect(menu).not.toHaveClass("hidden");
});

test("min can keep a mobile viewport at compact size while showToggle still works", () => {
    setViewportWidth(600);

    render(<SideMenu menu={defaultMenu} min="compact" showToggle />);

    const menu = document.getElementById("menu");
    const button = screen.getByRole("button", { name: /toggle menu/i });

    expect(menu).not.toHaveClass("hidden");
    expect(menu).toHaveStyle({ width: "4.5rem" });
    expect(document.getElementById("menu-whitespace-target")).toBeNull();

    fireEvent.click(button);

    expect(menu).toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "false");
});

test("resize updates are debounced", () => {
    jest.useFakeTimers();

    try {
        render(<SideMenu menu={defaultMenu} />);

        const menu = document.getElementById("menu");
        expect(menu).not.toHaveClass("hidden");

        setViewportWidth(600);
        fireEvent(window, new Event("resize"));

        expect(menu).not.toHaveClass("hidden");

        act(() => {
            jest.advanceTimersByTime(99);
        });

        expect(menu).not.toHaveClass("hidden");

        act(() => {
            jest.advanceTimersByTime(1);
        });

        expect(menu).toHaveClass("hidden");
    } finally {
        jest.useRealTimers();
    }
});
