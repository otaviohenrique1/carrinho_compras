import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label_button: string;
}

const BotaoEstilizado = styled.button`
  width: 90%;
  background-color: royalblue;
  color: white;
  padding: 15px 0;
  margin: 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export function Botao1(props: BotaoProps) {
  return (
    <BotaoEstilizado
      {...props}
    >
      {props.label_button}
    </BotaoEstilizado>
  );
}

export function ContainerBotoes(props: BotaoProps) {
  return (
    <ContainerBotoesEstilizado>
      <Botao1
        {...props}
        label_button={props.label_button}
      />
    </ContainerBotoesEstilizado>
  );
}

const ContainerBotoesEstilizado = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
`;
