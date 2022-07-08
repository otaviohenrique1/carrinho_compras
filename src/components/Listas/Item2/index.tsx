import styled, { css } from "styled-components";
import { ajustaPreco } from "../../../utils/utils";
import Imagem from "../../Imagem";
import { ItemCssBase } from "../ItemCssBase";

export interface Item2Props {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
  quantidade: number;
}

export function Item2(props: Item2Props) {
  const { imageUrl, detailUrl, name, price, sellingPrice, quantidade } = props;

  return (
    <ItemEstilizado>
      <Imagem src={imageUrl} alt={detailUrl} />
      <ItemDadosContainer>
        <ItemNome>{name}</ItemNome>
        <ItemPrecoAntigo>{`R$ ${ajustaPreco(price)}`}</ItemPrecoAntigo>
        <ItemPrecoNovo>{`R$ ${ajustaPreco(sellingPrice)}`}</ItemPrecoNovo>
        <ItemQuantidade>
          <span>Quantidade:</span>
          <span>{quantidade}</span>
        </ItemQuantidade>
      </ItemDadosContainer>
    </ItemEstilizado>
  );
}

const ItemParagrafoCssReset = css`
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
`;

const ItemNome = styled.p`
  font-weight: bold;
  font-size: 22px;
  ${ItemParagrafoCssReset}
`;
const ItemPrecoAntigo = styled.p`
  color: gray;
  font-size: 16px;
  ${ItemParagrafoCssReset}
`;

const ItemPrecoNovo = styled.p`
  font-weight: bold;
  font-size: 20px;
  ${ItemParagrafoCssReset}
`;

const ItemQuantidade = styled.p`
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 20px;
  ${ItemParagrafoCssReset}
`;

const ItemEstilizado = styled.li`
  ${ItemCssBase}
`;

const ItemDadosContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
