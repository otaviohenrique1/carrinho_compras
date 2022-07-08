import React, { LiHTMLAttributes, ReactNode } from 'react'
import styled from 'styled-components';
import { ItemCssBase } from '../ItemCssBase';

export default function ItemListaVazia(props: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <ItemListaVaziaEstilizada {...props}>Lista Vazia</ItemListaVaziaEstilizada>
  )
}

const ItemListaVaziaEstilizada = styled.li`
  ${ItemCssBase}
`;
