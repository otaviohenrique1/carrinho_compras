import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Botao } from "../Botao";

interface BotaoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label_button: string;
}

export function ContainerBotoes(props: BotaoProps) {
  return (
    <ContainerBotoesEstilizado>
      <Botao
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
