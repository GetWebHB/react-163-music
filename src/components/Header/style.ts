import styled from "styled-components";

const HeaderWrapper = styled.div`
  height: 70px;
  line-height: 70px;
  box-sizing: border-box;
  background: #242424;
  border-bottom: 1px solid black;
  .wrap_1100 {
    height: inherit;
    .top-left {
      .logo {
        box-sizing: border-box;
        width: 177px;
        height: 69px;
        padding-right: 20px;
        background-position: 0 0;
        a {
          font-size: 0;
        }
      }
      .item-list {
        .item {
          position: relative;
          display: block;
          padding: 0 19px;
          font-size: 14px;
          text-align: center;
          color: #ccc;
          .red-arrow {
            position: absolute;
            display: none;
            width: 12px;
            height: 7px;
            left: 0;
            right: 0;
            bottom: -1px;
            margin: 0 auto;
            background-position: -226px 0;
          }
          &.active,
          &:hover {
            color: white;
            background: #000000;
          }
          &.active {
            .red-arrow {
              display: block;
            }
          }
          &:last-child {
            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 21px;
              left: 100px;
              width: 28px;
              height: 19px;
              background: url(${require("@/assets/img/topbar-sprite.png")})
                no-repeat -190px 0;
            }
          }
        }
      }
    }
    .top-right {
      .ant-input-affix-wrapper {
        width: 158px;
        border-radius: 32px;
        box-shadow: none;
        border: none;
        input {
          font-size: 12px;
          &::placeholder {
            color: #9b9b9b;
          }
        }
      }
      .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        margin-left: 12px;
        text-align: center;
        border: 1px solid #4f4f4f;
        border-radius: 20px;
        color: #ccc;
        &:hover {
          border: 1px solid #ccc;
        }
      }
      .login-btn {
        width: 28px;
        margin-left: 20px;
        color: #999;
        &:hover {
          text-decoration: underline;
          color: #787878;
        }
      }
    }
  }
  .line {
    background: #c20c0c;
    height: 5px;
  }
`;

export default HeaderWrapper;
