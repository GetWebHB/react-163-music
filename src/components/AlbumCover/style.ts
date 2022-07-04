import styled from "styled-components";

const AlbumCoverWrapper = styled.li`
  width: 118px;
  height: 150px;
  background-position: -260px 100px;
  .album-cover {
    position: relative;
    margin-bottom: 7px;
    &:hover {
      .play-icon {
        display: block;
      }
    }
    .msk {
      position: absolute;
      width: 118px;
      height: 100px;
      top: 0;
      font-size: 0;
      background-position: 0 -570px;
    }
    .play-icon {
      position: absolute;
      width: 22px;
      height: 22px;
      z-index: 2;
      display: none;
      bottom: 5px;
      right: 28px;
      font-size: 0;
      background-position: 0 -85px;
      &:hover {
        background-position: 0 -110px;
      }
    }
  }
  .album-info {
    p {
      font-size: 12px;
      padding-right: 18px;
      line-height: 18px;
    }
    .tit {
      line-height: 18px;
      a {
        color: #000;
      }
    }
    .author {
      a {
        color: #666;
      }
    }
  }
`;

export default AlbumCoverWrapper;
