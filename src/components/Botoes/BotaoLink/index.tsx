import { AnchorHTMLAttributes, ReactNode } from "react";
import { Link, To } from "react-router-dom";
import styled from "styled-components";

interface BotaoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: To;
  children: ReactNode;
  margin_top: string;
  margin_bottom: string;
  margin_left: string;
  margin_right: string;
}

export function BotaoLink(props: BotaoLinkProps) {
  const { to, children, margin_bottom, margin_left, margin_right, margin_top } = props;

  return (
    <BotaoLinkEstilizado
      {...props}
      to={to}
      margin_bottom={margin_bottom}
      margin_left={margin_left}
      margin_right={margin_right}
      margin_top={margin_top}
    >{children}</BotaoLinkEstilizado>
  );
}

const BotaoLinkEstilizado = styled(Link)<BotaoLinkProps>`
  margin-top: ${(props) => props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom};
  margin-left: ${(props) => props.margin_left};
  margin-right: ${(props) => props.margin_right};
  text-decoration: none;
  width: 90%;
  background-color: royalblue;
  color: white;
  padding: 10px;
  font-size: 25px;
  border-radius: 10px;
  text-align: center;
`;
