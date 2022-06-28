import { NavLink } from "react-router-dom";
import type { headerData } from "./types";

function generateNav(headerData: headerData[]) {
  return headerData.map((item, index) => {
    const { linkUrl } = item;
    if (item.linkUrl.includes("https")) {
      return (
        <a
          key={linkUrl}
          className="item"
          href={linkUrl}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
      );
    }

    return (
      <NavLink className="item" to={linkUrl} exact key={linkUrl}>
        {item.title}
        <i className="topbar-sprite red-arrow"></i>
      </NavLink>
    );
  });
}

export default generateNav;
