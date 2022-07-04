import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 172px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  .foot-left {
    padding-top: 15px;
    line-height: 24px;
    p,
    a {
      color: #666;
    }
    a {
      &:hover {
        text-decoration: underline;
      }
    }
    .links {
      .line {
        position: relative;
        top: -1px;
        margin: 0 4px;
        color: #c2c2c2;
      }
      a {
        color: #999;
      }
    }
    .police-links {
      img {
        position: relative;
        width: 14px;
        height: 14px;
        top: -1px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  .foot-right {
    padding-top: 33px;
    .img-list {
      width: 420px;
      .img-item {
        width: 50px;
        height: 45px;
        margin: 0 auto;
        &.logo-amped {
          background-position: -60px -456.5px;
        }
        &.logo-auth {
          background-position: -60px -101px;
        }
        &.logo-musician {
          background-position: 0 0;
        }
        &.logo-reward {
          background-position: -60px -50px;
        }
        &.logo-cash {
          background-position: 0 -101px;
        }
      }
      .item-text {
        width: 52px;
        height: 14px;
        margin: 5px 5px 0;
        &.tt-amped {
          width: 72px;
          margin: 5px 0 0 -2px;
          background-position: 0 -108px;
        }
        &.tt-auth {
          background-position: -1px -91px;
        }
        &.tt-music {
          background-position: 0 0;
        }
        &.tt-reward {
          background-position: 0 -54px;
        }
        &.tt-cash {
          background-position: -1px -72px;
        }
      }
    }
  }
`;

export default FooterWrapper;
