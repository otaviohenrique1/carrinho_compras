import { ButtonHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Botao(props: BotaoProps) {
  const { children } = props;

  return (
    <BotaoEstilizado {...props}
    >{children}</BotaoEstilizado>
  );
}

const BotaoEstilizado = styled.button`
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  padding-top: 10px !important;
  padding-bottom: 10px !important;
  text-decoration: none !important;
  width: 90% !important;
  background-color: royalblue !important;
  color: white !important;
  font-size: 25px !important;
  border-radius: 10px !important;
  text-align: center !important;
  border: 0 !important;
  cursor: pointer !important;

  &:hover {
    background-color:  #1f49c7 !important;
  }

  &:active {
    background-color:   #153184 !important;
  }
`;

