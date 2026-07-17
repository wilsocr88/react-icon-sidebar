import React, { useEffect, useState } from "react";
import {
    MdAddCircle,
    MdDashboard,
    MdFavorite,
    MdSettings,
    MdSupportAgent,
} from "react-icons/md";
import SideMenu from "react-icon-sidebar";

const menu = [
    {
        icon: <MdDashboard size="2em" />,
        text: "Dashboard",
        link: "/dashboard",
    },
    {
        icon: MdAddCircle,
        text: "New",
        href: "/new",
    },
    {
        icon: MdFavorite,
        text: "Favorites",
        link: "/favorites",
    },
    {
        hr: true,
    },
    {
        isTitleItem: true,
        text: "Additional Links",
    },
    {
        icon: MdSettings,
        text: "Settings",
        link: "/settings",
    },
    {
        icon: MdSupportAgent,
        text: "Support",
        link: "/support",
    },
    {
        groupTitle: "Show more",
        expanded: false,
        groupItems: [
            {
                icon: <div style={{ fontSize: "2rem" }}>+</div>,
                text: "Group Item 1",
                link: "/group-item-1",
            },
            {
                icon: <div style={{ fontSize: "2rem" }}>#</div>,
                text: "Group Item 2",
                link: "/group-item-2",
            },
        ],
    },
];

const App = () => {
    const [pathname, setPathname] = useState(window.location.pathname);

    useEffect(() => {
        const updatePath = () => {
            setPathname(window.location.pathname);
        };

        window.addEventListener("popstate", updatePath);

        return () => {
            window.removeEventListener("popstate", updatePath);
        };
    }, []);

    const navigate = link => {
        window.history.pushState({}, "", link);
        setPathname(link);
    };

    return (
        <div className="demo-app">
            <SideMenu key={pathname} menu={menu} />
            <main className="demo-content">
                <h1>react-icon-sidebar visual test</h1>
                <p>
                    Use the controls below to simulate route changes and
                    validate active state styling.
                </p>
                <div className="demo-actions">
                    {menu
                        .filter(item => item.hr !== true)
                        .map(item =>
                            typeof item.groupTitle !== "undefined"
                                ? item.groupItems.map(groupItem => (
                                      <button
                                          key={groupItem.link}
                                          type="button"
                                          onClick={() =>
                                              navigate(groupItem.link)
                                          }
                                      >
                                          {groupItem.text}
                                      </button>
                                  ))
                                : !item.isTitleItem && (
                                      <button
                                          key={item.link || item.href}
                                          type="button"
                                          onClick={() =>
                                              navigate(item.link || item.href)
                                          }
                                      >
                                          {item.text}
                                      </button>
                                  ),
                        )}
                </div>
                <p>
                    Current route: <code>{pathname}</code>
                </p>
                <p className="demo-note">
                    Resize the viewport below 768px to test mobile toggle and
                    overlay behavior.
                </p>
            </main>
        </div>
    );
};

export default App;
