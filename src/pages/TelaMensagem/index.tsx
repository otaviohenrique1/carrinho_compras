import { Container } from '../../components/Container';
import styled from "styled-components";
import { Titulo } from '../../components/Titulo';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Spinner } from '../../components/Spinner';

const Mensagem = styled.div`
  background-color: white;
  width: 500px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 20px;
`;

export function TelaMensagem() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  });

  return (
    <Container>
      <Mensagem>
        <Titulo titulo="Compra realizada" />
        <Spinner />
      </Mensagem>
    </Container>
  );
}