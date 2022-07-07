import React, { HTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';

interface BoxProps extends HTMLAttributes<HTMLDivElement>, MarginPaddingStyleProps {
  children: ReactNode;
}

export default function Box(props: BoxProps) {
  const { children, margin_bottom, margin_top, margin_left, margin_right, padding_bottom, padding_top, padding_right, padding_left } = props;

  return (
    <BoxEstilizado
      {...props}
      margin_bottom={margin_bottom}
      margin_top={margin_top}
      margin_left={margin_left}
      margin_right={margin_right}
      padding_bottom={padding_bottom}
      padding_top={padding_top}
      padding_left={padding_left}
      padding_right={padding_right}
    >{children}</BoxEstilizado>
  )
}

const BoxEstilizado = styled.div<MarginPaddingStyleProps>`
  width: 100%;
  margin-bottom: ${(props) => props.margin_bottom || 0};
  margin-top: ${(props) => props.margin_top || 0};
  margin-left: ${(props) => props.margin_left || 0};
  margin-right: ${(props) => props.margin_right || 0};
  padding-bottom: ${(props) => props.padding_bottom || 0};
  padding-top: ${(props) => props.padding_top || 0};
  padding-left: ${(props) => props.padding_left || 0};
  padding-right: ${(props) => props.padding_right || 0};
`;
