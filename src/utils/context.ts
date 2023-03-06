import React from "react";
import {navItems} from "./constants";
import {NavigationItem} from "./types";

export const NaviContext = React.createContext({
    item: navItems[0],
    changePage: (item: NavigationItem) => {
    }
});