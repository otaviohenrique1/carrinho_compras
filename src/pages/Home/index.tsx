import { BotaoLink } from "../../components/Botoes/BotaoLink";
import Box from "../../components/Box";
import { Container } from "../../components/Container";
import { Separador } from "../../components/Separador";
import { Titulo } from "../../components/Titulo";

export function Home() {
  return (
    <Container>
      <Titulo titulo="HomePage" />
      <Separador />
      <BotaoLink to="/produtos">Produtos</BotaoLink>
      <Separador />
      <BotaoLink to="/carrinho_compras">Carrinho</BotaoLink>
    </Container>
  );
}
