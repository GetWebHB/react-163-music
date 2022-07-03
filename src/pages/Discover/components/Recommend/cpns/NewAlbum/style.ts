import styled from "styled-components";

const NewAlbumWrapper = styled.div`
  margin-top: 35px;
  .album-content {
    position: relative;
    height: 186px;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    background: #f5f5f5;
    .album-wrap {
      padding: 0 25px;
      ul {
        display: flex !important;
        justify-content: space-around;
        height: 100%;
        margin-top: 24px;
        .ant-carousel {
          height: 186px !important;
        }
      }
    }

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
      top: 71px;
      &.arrow-left {
        left: 4px;
        background-position: -260px -75px;
        &:hover {
          background-position: -280px -75px;
        }
      }
      &.arrow-right {
        right: 4px;
        background-position: -300px -75px;
        &:hover {
          background-position: -320px -75px;
        }
      }
    }
  }
`;

export default NewAlbumWrapper;
