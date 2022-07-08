import styled, { css } from "styled-components";
import { ajustaPreco } from "../../../utils/utils";
import Imagem from "../../Imagem";

export interface ItemBaseProps {
  src: string;
  alt: string;
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
}

export function ItemBase(props: ItemBaseProps) {
  const { imageUrl, detailUrl, name, price, sellingPrice } = props;

  return (
    <>
      <Imagem src={imageUrl} alt={detailUrl} />
      <ItemDadosContainer>
        <ItemNome>{name}</ItemNome>
        <ItemPrecoAntigo>{`R$ ${ajustaPreco(price)}`}</ItemPrecoAntigo>
        <ItemPrecoNovo>{`R$ ${ajustaPreco(sellingPrice)}`}</ItemPrecoNovo>
      </ItemDadosContainer>
    </>
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

const ItemDadosContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
