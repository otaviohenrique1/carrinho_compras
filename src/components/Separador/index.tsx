import { HTMLAttributes } from "react";
import styled from "styled-components";

const SeparadorEstilizado = styled.hr`
  width: 99%;
  padding: 0;
  margin: 0;
`;

export function Separador(props: HTMLAttributes<HTMLHRElement>) {
  return (
    <SeparadorEstilizado {...props} />
  );
}