import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Container'
import { Item } from '../../components/Item';
import { Separador } from '../../components/Separador';
import { Titulo } from '../../components/Titulo';
import json_items from "../../utils/acima-10-reais.json";

export function Produtos() {
  return (
    <Container>
      <Titulo titulo="Produtos" />
      <Separador />
      <ListaProdutos>
        {json_items.items.map((item) => {
          return (
            <Item
              key={item.uniqueId}
              name={item.name}
              price={(item.price / 100)}
              sellingPrice={(item.sellingPrice / 100)}
              imageUrl={item.imageUrl}
              detailUrl={item.detailUrl}
            />
          );
        })}
      </ListaProdutos>
    </Container>
  )
}

const ListaProdutos = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-inline-start: 0 !important;
`;