import { useEffect, useState } from 'react';
import { BotaoLink } from '../../components/Botoes/BotaoLink';
import { Container } from '../../components/Container';
import { ListaProdutos } from '../../components/Listas/ListaProdutos';
import { Separador } from '../../components/Separador';
import { Titulo } from '../../components/Titulo';
import { useContext } from "react";
import { CarrinhoContext, ProdutoCarrinho } from "../../context/carrinho/index";
import styled from 'styled-components';
import { BotaoCssBase } from '../../components/Botoes/BotaoCssBase';
import { PrecoTotal } from '../../components/PrecoTotal';
import { ItemCarrinho } from '../../components/Listas/ItemCarrinho';
import BotaoPadrao from '../../components/Botoes/BotaoPadrao';
import { useNavigate } from 'react-router-dom';

export function CarrinhoCompras() {
  const { dataCarrinho, setDataCarrinho } = useContext(CarrinhoContext);
  const [data, setData] = useState<ProdutoCarrinho[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(dataCarrinho);
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
              <ItemCarrinho
                key={index}
                name={name}
                price={(price / 100)}
                sellingPrice={(sellingPrice / 100)}
                imageUrl={imageUrl}
                detailUrl={detailUrl}
                on_click={() => {
                  let resultado = dataCarrinho.filter((item, i) => {
                    return i !== index
                  });

                  setDataCarrinho(resultado);
                  setData(resultado);
                }}
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
      <BotaoPadrao onClick={() => {
          navigate('/tela_mensagem');
      }}>Finalizar Compra</BotaoPadrao>
    </Container>
  )
}

const Botao = styled.button`
  ${BotaoCssBase}
`;
