import styled from "styled-components";

interface IProps {
  bgImage: string;
}

const BannerWrapper = styled.div<IProps>`
  background: url(${(props) => props.bgImage}) no-repeat center/6000px;
  .wrap_980 {
    position: relative;
    .swiper {
      width: 730px;
      .swiper-item {
      }
    }
    .download {
      flex: 1;
      height: inherit;
      background-position: 0 0;
      a {
        display: none;
        margin: 186px 0 0 19px;
        width: 215px;
        height: 56px;
        font-size: 0;
        background-position: 0 -290px;
      }
      &:hover {
        a {
          display: block;
        }
      }
      .download-tit {
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        margin: 10px auto;
        color: #8d8d8d;
        line-height: normal;
      }
    }
    .arrows {
      position: absolute;
      height: 63px;
      width: 37px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      &.arrow-left {
        left: -68px;
        background-position: 0 -360px;
        &:hover {
          background-position: 0 -430px;
        }
      }
      &.arrow-right {
        right: -68px;
        background-position: 0 -508px;
        &:hover {
          background-position: 0 -578px;
        }
      }
    }
  }
`;

export default BannerWrapper;
