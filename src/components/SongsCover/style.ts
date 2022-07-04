import styled from "styled-components";

const SongsCoverWrapper = styled.div`
  width: 140px;
  .album-top {
    position: relative;
    height: 140px;
    .cover,
    .msk {
      position: absolute;
    }
    .cover {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-position: 0 0;
    }
    .msk {
      width: 100%;
      height: 27px;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      bottom: 0;
      color: #ccc;
      background-position: 0 -537px;
      .listen-num {
        .listen {
          width: 14px;
          height: 11px;
          margin-right: 5px;
          background-position: 0 -24px;
        }
        .num {
          line-height: 19px;
        }
      }

      .play {
        width: 16px;
        height: 17px;
        background-position: 0 0;
        &:hover {
          background-position: 0 -60px;
        }
      }
    }
  }
  .dec {
    line-height: 20px;
    font-size: 14px;
    margin: 8px 0 3px;
    a {
      color: black;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default SongsCoverWrapper;
