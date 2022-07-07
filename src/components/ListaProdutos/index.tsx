import { ReactNode } from "react";
import styled from "styled-components";

const ListaProdutosEstilizada = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px 10px;
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
