import styled from "styled-components";
import { ajustaPreco } from "../../utils/utils";
import { Mensagem } from "../Mensagem";

const PrecoEstilizado = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
`;

const PrecoContainer = styled.div`
  padding: 30px 10px;
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

interface PrecoProps {
  valor_preco: number;
}

export function PrecoTotal(props: PrecoProps) {
  const preco_total = ajustaPreco(props.valor_preco);
  return (
    <PrecoEstilizado>
      <PrecoContainer>
        <span>Total</span>
        <span>{`R$ ${preco_total}`}</span>
      </PrecoContainer>
      {(props.valor_preco >= 10) && (
        <Mensagem />
      )}
    </PrecoEstilizado>
  );
}
