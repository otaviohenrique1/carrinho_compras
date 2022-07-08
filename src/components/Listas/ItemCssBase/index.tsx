import { css } from "styled-components";

export const ItemCssBase = css`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  &:last-child {
    margin-bottom: 0;
  }
`;