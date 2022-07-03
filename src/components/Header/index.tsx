import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { headerData } from "@/common/local-data";
import HeaderWrapper from "./style";

export interface IHeaderData {
  title: string;
  linkUrl: string;
}

const Header = memo(() => {
  function generateNav(headerData: IHeaderData[]) {
    return headerData.map((item) => {
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
        <NavLink className="item" to={linkUrl} key={linkUrl}>
          {item.title}
          <i className="topbar-sprite red-arrow"></i>
        </NavLink>
      );
    });
  }
  const navList = generateNav(headerData);

  return (
    <HeaderWrapper>
      <div className="flex justify-between wrap_1100">
        <div className="flex justify-between top-left">
          <div className="logo topbar-sprite">
            <h1>
              <a className="block w-full h-full" href="/#">
                网易云音乐
              </a>
            </h1>
          </div>
          <div className="flex justify-between item-list">{navList}</div>
        </div>
        <div className="top-right">
          <Input
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
          />
          <a className="center inline-block" href="#/">
            创作者中心
          </a>
          <a className="login-btn inline-block" href="#/">
            登录
          </a>
        </div>
      </div>
      <div className="line"></div>
    </HeaderWrapper>
  );
});

export default Header;
