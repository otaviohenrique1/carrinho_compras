import styled from "styled-components";

const TituloEstilizado = styled.h1`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  margin: 0;
  font-size: 30px;
  font-weight: bold;
`;

interface TituloProps {
  titulo: string;
}

export function Titulo(props: TituloProps) {
  return (
    <TituloEstilizado>
      {props.titulo}
    </TituloEstilizado>
  );
}