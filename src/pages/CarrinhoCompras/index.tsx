import { useEffect, useState } from 'react'
import { BotaoLink } from '../../components/Botoes/BotaoLink'
import { Container } from '../../components/Container'
import { ListaProdutos } from '../../components/Listas/ListaProdutos'
import { Separador } from '../../components/Separador'
import { Titulo } from '../../components/Titulo'
import { useContext } from "react";
import { CarrinhoContext, ProdutoCarrinho } from "../../context/carrinho/index";
import { ajustaPreco } from '../../utils/utils'
import styled, { css } from 'styled-components'
import { BotaoCssBase } from '../../components/Botoes/BotaoCssBase'
import { PrecoTotal } from '../../components/PrecoTotal'
import { Item2 } from '../../components/Listas/Item2'
import BotaoPadrao from '../../components/Botoes/BotaoPadrao'

interface DataTypes extends ProdutoCarrinho {
  quantidade: number
}

export function CarrinhoCompras() {
  const { dataCarrinho } = useContext(CarrinhoContext);
  const [data, setData] = useState<DataTypes[]>([]);

  useEffect(() => {
    let resultado = [];
    dataCarrinho.forEach(() => {});
    // setData(dataCarrinho);
  }, [])

  return (
    <Container>
      <Titulo titulo="Carrinho de compras" />
      <Separador />
      <BotaoLink to="/produtos">Produtos</BotaoLink>
      <Separador />
      <ListaProdutos>
        {(data.length !== 0) ? (
          data.map((item, index) => {
            const { name, price, sellingPrice, imageUrl, detailUrl } = item;

            return (
              <Item2
                key={index}
                name={name}
                price={(price / 100)}
                sellingPrice={(sellingPrice / 100)}
                imageUrl={imageUrl}
                detailUrl={detailUrl}
                quantidade={100}
              />
            );
          })
        ) : "Lista vazia"}
      </ListaProdutos>
      <Separador />
      <PrecoTotal
        valor_preco={data.reduce((valorAnterior, valorAtual) => valorAnterior + (valorAtual.price / 100), 0)}
      />
      <Separador />
      <BotaoPadrao onClick={() => { }}>Finalizar Compra</BotaoPadrao>
    </Container>
  )
}

const Botao = styled.button`
  ${BotaoCssBase}
`;
