import { BotaoLink } from '../../components/Botoes/BotaoLink';
import { Container } from '../../components/Container'
import { ItemProdutos } from '../../components/Listas/ItemProdutos';
import { ListaProdutos } from '../../components/Listas/ListaProdutos';
import { Separador } from '../../components/Separador';
import { Titulo } from '../../components/Titulo';
import json_items from "../../utils/acima-10-reais.json";
import { useContext } from "react";
import { CarrinhoContext } from "../../context/carrinho/index";

export function Produtos() {
  const { dataCarrinho, setDataCarrinho } = useContext(CarrinhoContext);

  return (
    <Container>
      <Titulo titulo="Produtos" />
      <Separador />
      <BotaoLink to="/carrinho_compras">Carrinho de compras</BotaoLink>
      <Separador />
      <ListaProdutos>
        {json_items.items.map((item, index) => {
          const { uniqueId, name, price, sellingPrice, imageUrl, detailUrl } = item;

          return (
            <ItemProdutos
              key={index}
              name={name}
              price={(price / 100)}
              sellingPrice={(sellingPrice / 100)}
              imageUrl={imageUrl}
              detailUrl={detailUrl}
              on_click={() => {
                setDataCarrinho([...dataCarrinho, { uniqueId, name, price, sellingPrice, imageUrl, detailUrl }]);
              }}
            />
          );
        })}
      </ListaProdutos>
    </Container>
  )
}
