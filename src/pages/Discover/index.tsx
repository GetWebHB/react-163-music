import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { RouteConfig, renderRoutes } from "react-router-config";
import { DiscoverWrapper, DiscoverContent } from "./style";
import { topBarData } from "@/common/local-data";

const Discover: React.FC = memo((props: RouteConfig) => {
  const { route } = props;
  return (
    <DiscoverWrapper>
      <div className="top-bar">
        <ul className="flex wrap_1100">
          {topBarData.map((item) => {
            return (
              <li key={item.linkUrl}>
                <NavLink to={item.linkUrl}>
                  <span>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <DiscoverContent>{renderRoutes(route.routes)}</DiscoverContent>
    </DiscoverWrapper>
  );
});

export default Discover;
