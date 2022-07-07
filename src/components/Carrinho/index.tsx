import { Container } from '../Container';
import styled from "styled-components";
import { Titulo } from '../Titulo';
import { ContainerBotoes } from '../Botoes/Botao';
import { Separador } from '../Separador';
import { Preco } from '../PrecoTotal';
import { ListaProdutos } from '../ListaProdutos';
import { Item, ItemProps } from "../Item";

const Produtos = styled.div`
  background-color: white;
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

interface DataProps extends ItemProps {
  uniqueId: string;
}

interface CarrinhoProps {
  data: DataProps[];
  valor_preco_total: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Carrinho(props: CarrinhoProps) {
  return (
    <Container>
      <Produtos>
        <Titulo titulo="Meu carrinho" />
        <Separador />
        <ListaProdutos>
          {props.data.map((item) => {
            return (
              <Item
                key={item.uniqueId}
                name={item.name}
                price={(item.price/100)}
                sellingPrice={(item.sellingPrice/100)}
                imageUrl={item.imageUrl}
                detailUrl={item.detailUrl}
              />
            );
          })}
        </ListaProdutos>
        <Separador />
        <Preco valor_preco={(props.valor_preco_total/100)} />
        <Separador />
        <ContainerBotoes
          label_button="Finalizar compra"
          onClick={props.onClick}
        />
      </Produtos>
    </Container>
  );
}
