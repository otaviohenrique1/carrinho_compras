import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

interface BotaoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: To;
  children: ReactNode;
}

export function BotaoLink(props: BotaoLinkProps) {
  const { to, children } = props;

  return (
    <BotaoLinkEstilizado
      {...props}
      to={to}
    >{children}</BotaoLinkEstilizado>
  );
}

const BotaoLinkEstilizado = styled(Link)`
  margin-bottom: 20px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
  width: 90%;
  background-color: royalblue;
  color: white;
  font-size: 25px;
  border-radius: 10px;
  text-align: center;
`;
