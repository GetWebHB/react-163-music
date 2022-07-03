import React, { memo } from "react";
import AlbumCoverWrapper from "./style";
import changeImageSize from "@/utils/changeImageSize";

interface IProps {
  imgUrl?: string;
  tit?: string;
  author?: string;
}

const AlbumCover = memo(({ imgUrl = "", tit, author }: IProps) => {
  return (
    <AlbumCoverWrapper className="btns-play-icon-sprite">
      <div className="album-cover">
        <img src={changeImageSize(imgUrl, 100)} alt="album" />
        <a className="block cover-sprite msk" href="/todo">
          album
        </a>
        <a className="block icon-all-sprite play-icon" href="/todo">
          play
        </a>
      </div>
      <div className="album-info">
        <p className="text-hide-dot tit">
          <a href="/todo">{tit}</a>
        </p>
        <p className="text-hide-dot author">
          <a href="/todo">{author}</a>
        </p>
      </div>
    </AlbumCoverWrapper>
  );
});

export default AlbumCover;
