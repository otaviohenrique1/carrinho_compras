import { css } from "styled-components";

export const BotaoCssBase = css`
  margin-bottom: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
  width: 90%;
  background-color: royalblue;
  color: white;
  font-size: 25px;
  border-radius: 10px;
  text-align: center;
  border: 0;
  cursor: pointer;
  font-family: Poppins_Medium !important;

  &:hover {
    background-color:  #1f49c7;
  }

  &:active {
    background-color:   #153184;
  }
`;