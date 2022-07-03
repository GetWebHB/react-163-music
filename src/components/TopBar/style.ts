import styled from "styled-components";

const TopBarWrapper = styled.div`
  height: 35px;
  line-height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  .topbar-left {
    .nav-list {
      .line {
        margin: 0 10px;
        color: #ccc;
      }
    }
    h2 {
      font-size: 20px;
      margin-right: 20px;
    }
  }
  .topbar-right {
    .arrow-right {
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
  a {
    color: #666;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default TopBarWrapper;
