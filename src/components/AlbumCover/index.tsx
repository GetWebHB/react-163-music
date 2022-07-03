import React, { memo } from "react";

import AlbumCoverWrapper from "./style";

import changeImageSize from "@/utils/changeImageSize";
import formatNumber from "@/utils/formatNumber";

interface IProps {
  imgUrl: string;
  lisNum: number;
  dec: string;
  style: React.CSSProperties;
}

const AlbumCover = memo(({ imgUrl, lisNum, dec, style }: IProps) => {
  return (
    <AlbumCoverWrapper style={style}>
      <div className="album-top">
        <a href="todo">
          <img src={changeImageSize(imgUrl, 140)} alt="album" />
          <div className="cover-sprite cover"></div>
          <div className="flex cover-sprite msk">
            <div className="flex items-center listen-num">
              <i className="icon-all-sprite listen"></i>
              <span className="num"> {formatNumber(lisNum)} </span>
            </div>
            <i className="icon-all-sprite play"></i>
          </div>
        </a>
      </div>
      <p className="dec">
        <a href="/todo">{dec}</a>
      </p>
    </AlbumCoverWrapper>
  );
});

export default AlbumCover;
