import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container(props: ContainerProps) {
  return (
    <ContainerEstilizado>
      <Box>
        {props.children}
      </Box>
    </ContainerEstilizado>
  );
}

const ContainerEstilizado = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Box = styled.div`
  background-color: white;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

