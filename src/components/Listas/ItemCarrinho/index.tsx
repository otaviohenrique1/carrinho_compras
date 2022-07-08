import styled, { css } from "styled-components";
import { ajustaPreco } from "../../../utils/utils";
import Imagem from "../../Imagem";
import { ItemBase } from "../ItemBase";
import { ItemCssBase } from "../ItemCssBase";

export interface ItemCarrinhoProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
  on_click: () => void;
}

export function ItemCarrinho(props: ItemCarrinhoProps) {
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
      <ColBotoes>
        <BotaoRemover type="button" onClick={on_click}>-</BotaoRemover>
      </ColBotoes>
    </ItemEstilizado>
  );
}

const Col = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const ColBotoes = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BotaoBaseCss = css`
  color: white;
  border: 0;
  font-size: 30px;
  font-weight: 900;
  height: 100%;
`;

const BotaoRemover = styled.button`
  background-color: crimson;
  ${BotaoBaseCss}

  &:hover {
    background-color: #a30f2d;
  }

  &:active {
    background-color: #5d091a;
  }
`;

const ItemEstilizado = styled.li`
  ${ItemCssBase}
`;
