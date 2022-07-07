import { BotaoLink } from "../../components/Botoes/BotaoLink";
import { Container } from "../../components/Container";
import { Separador } from "../../components/Separador";
import { Titulo } from "../../components/Titulo";

export function Home() {
  return (
    <Container>
      <Titulo titulo="HomePage" />
      <BotaoLink
        to="/produtos"
        margin_bottom="10px"
        margin_top="10px"
        margin_left="0"
        margin_right="0"
      >Produtos</BotaoLink>
      <Separador />
      <BotaoLink
        to="/carrinho_compras"
        margin_bottom="10px"
        margin_top="10px"
        margin_left="0"
        margin_right="0"
      >Carrinho</BotaoLink>
    </Container>
  );
}
