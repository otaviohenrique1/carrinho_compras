import styled from 'styled-components';
import { BotaoLink } from '../../components/Botoes/BotaoLink';
import { Container } from '../../components/Container'
import { Item } from '../../components/Item';
import { ListaProdutos } from '../../components/ListaProdutos';
import { Separador } from '../../components/Separador';
import { Titulo } from '../../components/Titulo';
import json_items from "../../utils/acima-10-reais.json";

export function Produtos() {
  return (
    <Container>
      <Titulo titulo="Produtos" />
      <Separador />
      <BotaoLink to="/carrinho_compras">Carrinho de compras</BotaoLink>
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
              on_click={() => {}}
            />
          );
        })}
      </ListaProdutos>
    </Container>
  )
}
