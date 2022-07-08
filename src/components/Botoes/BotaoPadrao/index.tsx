import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';
import { BotaoCssBase } from '../BotaoCssBase';

interface BotaoPadraoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function BotaoPadrao(props: BotaoPadraoProps) {
  const { children } = props;

  return (
    <BotaoPadraoEstilizado {...props}>{children}</BotaoPadraoEstilizado>
  )
}
<button></button>
const BotaoPadraoEstilizado = styled.button`
  ${BotaoCssBase}
`;
