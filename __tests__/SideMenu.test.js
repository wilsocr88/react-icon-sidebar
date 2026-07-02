/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
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
    const button = screen.getByRole("button", { name: /toggle menu/i });
    const link = screen.getByRole("link", { name: "Test" });
    const separator = screen.getByRole("separator");

    expect(menu).toBeInTheDocument();
    expect(menu).not.toHaveClass("hidden");
    expect(button).toHaveAttribute("aria-expanded", "true");

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
