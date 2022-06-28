import React, { memo, Fragment } from "react";

import FooterWrapper from "./style";
import police_img from "@/assets/img/police.png";

import { footerData, footerImgLinks } from "@/common/local-data";

const Footer = memo(() => {
  return (
    <FooterWrapper>
      <div className="flex justify-between wrap_980">
        <div className="foot-left">
          <ul className="flex items-center links">
            {footerData.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <li>
                    <a href={item.linkUrl}>{item.title}</a>
                  </li>
                  {/* 最后|一个不显示 */}
                  {footerData.length - 1 !== index && (
                    <li className="line">|</li>
                  )}
                </Fragment>
              );
            })}
          </ul>
          <p className="copy_right">
            <span className="mr-3">网易公司版权所有©1997-2022</span>
            <span>
              杭州乐读科技有限公司运营：
              <a href="https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png">
                浙网文[2021] 1186-054号
              </a>
            </span>
          </p>
          <p className="police-links">
            <a href="https://beian.miit.gov.cn/#/Integrated/index">
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
            <a
              className="ml-3"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
            >
              <img src={police_img} alt="police" /> 浙公网安备 33010902002564号
            </a>
          </p>
          <p>互联网宗教信息服务许可证：浙（2022）0000120</p>
        </div>
        <div className="foot-right">
          <ul className="flex justify-between img-list">
            {footerImgLinks.map((item) => {
              return (
                <li key={item.links}>
                  <a
                    className="block"
                    href={item.links}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div
                      className={`foot-links-sprite img-item ${item.imgPositionClass}`}
                    ></div>
                  </a>
                  <span
                    className={`inline-block foot-links-text-sprite item-text ${item.textClass}`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </FooterWrapper>
  );
});

export default Footer;
