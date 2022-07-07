import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  const { children } = props;

  return (
    <ContainerEstilizado {...props}>
      <Center width="700px">
        {children}
      </Center>
    </ContainerEstilizado>
  );
}

const ContainerEstilizado = styled.div<MarginPaddingStyleProps>`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

interface CenterStyleProps {
  width: string;
}

const Center = styled.div<CenterStyleProps>`
  background-color: white;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

