import React, { memo, Fragment } from "react";
import TopBarWrapper from "./style";

interface IProps {
  title: string;
  navList?: string[];
  moreLink: string;
}

const TopBar = memo(({ title, navList = [], moreLink }: IProps) => {
  return (
    <TopBarWrapper className="flex justify-between btns-play-icon-sprite">
      <div className="flex topbar-left">
        <h2>{title}</h2>
        <ul className="flex nav-list">
          {navList.map((item, index) => {
            return (
              <Fragment key={item}>
                <li>
                  <a href="/todo">{item}</a>
                </li>
                {index + 1 !== navList.length && <li className="line">|</li>}
              </Fragment>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center topbar-right">
        <a href="/todo"> 更多 </a>
        <i className="block btns-play-icon-sprite arrow-right"></i>
      </div>
    </TopBarWrapper>
  );
});

export default TopBar;
