import styled from "styled-components";

export const DiscoverWrapper = styled.div`
  .top-bar {
    height: 34px;
    line-height: 34px;
    background: #c20c0c;
    border-bottom: 1px solid #a40011;
    .wrap_1100 {
      padding-left: 180px;
      height: inherit;
      li {
        height: 100%;
        a {
          display: block;
          padding-top: 7px;
          height: inherit;
          &:hover,
          &.active {
            span {
              background: #9b0909;
            }
          }
          span {
            display: block;
            font-size: 12px;
            height: 20px;
            line-height: 21px;
            border-radius: 20px;
            margin: 0 17px 0;
            padding: 0 13px;
            color: white;
          }
        }
      }
    }
  }
`;

export const DiscoverContent = styled.div`
  height: 600px;
  background: #f5f5f5;
`;
