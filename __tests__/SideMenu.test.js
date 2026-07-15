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

const groupedMenu = [
    {
        icon: MdStar,
        groupTitle: "Group",
        groupItems: [
            {
                text: "Child One",
                link: "/child-one",
            },
            {
                text: "Child Two",
                link: "/child-two",
            },
        ],
    },
];

const hrefAliasMenu = [
    {
        icon: MdStar,
        text: "Href Top",
        href: "/href-top",
    },
    {
        icon: MdStar,
        groupTitle: "Href Group",
        groupItems: [
            {
                text: "Href Child",
                href: "/href-child",
            },
        ],
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

test("align right moves the menu drawer and toggle button to the right", () => {
    setViewportWidth(600);
    render(<SideMenu menu={defaultMenu} align="right" />);

    const menu = document.getElementById("menu");
    const button = screen.getByRole("button", { name: /toggle menu/i });

    expect(menu).toHaveClass("hidden");
    expect(menu).toHaveStyle({
        position: "fixed",
        right: "0",
        transform: "translateX(100%)",
    });
    expect(button).toHaveStyle({ float: "right", marginRight: "0.8rem" });

    fireEvent.click(button);

    expect(menu).not.toHaveClass("hidden");
    expect(menu).toHaveStyle({ right: "0", transform: "translateX(0)" });
});

test("compact group popup anchors to the right when align is right", () => {
    render(<SideMenu menu={groupedMenu} force="compact" align="right" />);

    const groupToggle = screen.getByRole("button", { name: "Group" });
    fireEvent.click(groupToggle);

    const groupPopup = document.getElementById("menu-item-group-0");

    expect(groupPopup).toBeInTheDocument();
    expect(groupPopup).toHaveStyle({
        right: "1rem",
        maxWidth: "calc(100vw - 2rem)",
        overflowX: "hidden",
    });
});

test("compact group click-out overlay is viewport-fixed", () => {
    render(<SideMenu menu={groupedMenu} force="compact" />);

    const groupToggle = screen.getByRole("button", { name: "Group" });
    fireEvent.click(groupToggle);

    const whiteSpaceTarget = document.getElementById("menu-whitespace-target");

    expect(whiteSpaceTarget).toBeInTheDocument();
    expect(whiteSpaceTarget).toHaveStyle({
        position: "fixed",
        inset: "0",
        zIndex: "999",
    });
    expect(whiteSpaceTarget).not.toHaveAttribute("hidden");
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

test("grouped items expand and collapse beneath the group title", () => {
    render(<SideMenu menu={groupedMenu} force="full" />);

    const groupToggle = screen.getByRole("button", { name: "Group" });

    expect(groupToggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: "Child One" })).toBeNull();

    fireEvent.click(groupToggle);

    expect(groupToggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Child One" })).toBeInTheDocument();

    fireEvent.click(groupToggle);

    expect(groupToggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: "Child One" })).toBeNull();
});

test("grouped menu auto-expands when a group child route is active", () => {
    window.history.pushState({}, "", "/child-two");
    render(<SideMenu menu={groupedMenu} force="full" />);

    const groupToggle = screen.getByRole("button", { name: "Group" });
    const activeGroupLink = screen.getByRole("link", { name: "Child Two" });

    expect(groupToggle).toHaveAttribute("aria-expanded", "true");
    expect(activeGroupLink).toHaveAttribute("aria-current", "page");
});

test("grouped menu stays collapsed by default in compact mode even when a child route is active", () => {
    window.history.pushState({}, "", "/child-two");
    render(<SideMenu menu={groupedMenu} force="compact" />);

    const groupToggle = screen.getByRole("button", { name: "Group" });

    expect(groupToggle).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("link", { name: "Child Two" })).toBeNull();
});

test("href works as an alias for link on top-level and grouped items", () => {
    window.history.pushState({}, "", "/href-top");
    const { rerender } = render(<SideMenu menu={hrefAliasMenu} force="full" />);

    const topLevelHrefLink = screen.getByRole("link", { name: "Href Top" });
    expect(topLevelHrefLink).toHaveAttribute("href", "/href-top");
    expect(topLevelHrefLink).toHaveAttribute("aria-current", "page");

    window.history.pushState({}, "", "/href-child");
    rerender(<SideMenu menu={hrefAliasMenu} force="full" />);

    const groupToggle = screen.getByRole("button", { name: "Href Group" });
    fireEvent.click(groupToggle);

    const groupHrefLink = screen.getByRole("link", { name: "Href Child" });

    expect(groupToggle).toHaveAttribute("aria-expanded", "true");
    expect(groupHrefLink).toHaveAttribute("href", "/href-child");
    expect(groupHrefLink).toHaveAttribute("aria-current", "page");
});
