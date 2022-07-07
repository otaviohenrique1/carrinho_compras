import styled from "styled-components";

const MensagemEstilizado = styled.span`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 50px;
  color: green;
  background-color: lightgreen;
  padding: 10px 20px;
  line-height: 30px;
`;

export function Mensagem() {
  return (
    <MensagemEstilizado>
      Parabéns, sua compra tem frete grátis !
    </MensagemEstilizado>
  );
}