import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";
import { BotaoCssBase } from "../BotaoCssBase";

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
  text-decoration: none;
  ${BotaoCssBase}
`;
