import styled from "styled-components";
import { ajustaPreco } from "../../utils/utils";

export interface ItemProps {
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
  on_click: () => void;
}

export function Item(props: ItemProps) {
  const { imageUrl, detailUrl, name, price, sellingPrice, on_click } = props;

  return (
    <ItemEstilizado>
      <Col>
        <Imagem src={imageUrl} alt={detailUrl} />
        <ItemDadosContainer>
          <span>{name}</span>
          <span>{`R$ ${ajustaPreco(price)}`}</span>
          <span>{`R$ ${ajustaPreco(sellingPrice)}`}</span>
        </ItemDadosContainer>
      </Col>
      <AddButton type="button" onClick={on_click}>+</AddButton>
    </ItemEstilizado>
  );
}

const Col = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const AddButton = styled.button`
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
  list-style: none;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: gray;
  &:last-child {
    margin-bottom: 0;
  }
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
