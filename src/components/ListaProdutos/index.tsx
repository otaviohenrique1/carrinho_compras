import { ReactNode } from "react";
import styled from "styled-components";

const ListaProdutosEstilizada = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-inline-start: 0 !important;
`;

interface ListaProdutosProps {
  children: ReactNode;
}

export function ListaProdutos(props: ListaProdutosProps) {
  return (
    <ListaProdutosEstilizada>
      {props.children}
    </ListaProdutosEstilizada>
  );
}
