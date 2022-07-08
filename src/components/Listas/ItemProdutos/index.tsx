import styled from "styled-components";
import { ajustaPreco } from "../../../utils/utils";
import { ItemBase } from "../ItemBase";
import { ItemCssBase } from "../ItemCssBase";

export interface ItemProdutosProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
  on_click: () => void;
}

export function ItemProdutos(props: ItemProdutosProps) {
  const { imageUrl, detailUrl, name, price, sellingPrice, on_click } = props;

  return (
    <ItemEstilizado>
      <Col>
        <ItemBase
          src={imageUrl}
          alt={detailUrl}
          imageUrl={imageUrl}
          detailUrl={detailUrl}
          name={name}
          price={price}
          sellingPrice={sellingPrice}
        />
      </Col>
      <BotaoAdicionar type="button" onClick={on_click}>+</BotaoAdicionar>
    </ItemEstilizado>
  );
}

const Col = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const BotaoAdicionar = styled.button`
  background-color: blueviolet;
  color: white;
  border: 0;
  font-size: 30px;
  font-weight: 900;

  &:hover {
    background-color: #761cca;
  }

  &:active {
    background-color: #340c5a;
  }
`;

const ItemEstilizado = styled.li`
  ${ItemCssBase}
`;

const Imagem = styled.img`
  width: 100px;
`;

const ItemDadosContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  span:first-child {
    margin-bottom: 10px;
  }

  span:nth-child(2) {
    color: gray;
  }
  
  span:last-child, span:first-child {
    font-weight: bold;
    font-size: 20px;
  }
`;
