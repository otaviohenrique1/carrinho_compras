import { BotaoLink } from '../../components/Botoes/BotaoLink'
import { Container } from '../../components/Container'
import { ListaProdutos } from '../../components/ListaProdutos'
import { Separador } from '../../components/Separador'
import { Titulo } from '../../components/Titulo'

export function CarrinhoCompras() {
  return (
    <Container>
      <Titulo titulo="Carrinho de compras" />
      <Separador />
      <BotaoLink to="/produtos">Carrinho de compras</BotaoLink>
      <Separador />
      <ListaProdutos>
        <ul>
          <li>1 - asdasdasdadsadsadsadsads</li>
          <li>2 - asdasdasdadsadsadsadsads</li>
          <li>3 - asdasdasdadsadsadsadsads</li>
          <li>4 - asdasdasdadsadsadsadsads</li>
          <li>5 - asdasdasdadsadsadsadsads</li>
          <li>6 - asdasdasdadsadsadsadsads</li>
          <li>7 - asdasdasdadsadsadsadsads</li>
          <li>8 - asdasdasdadsadsadsadsads</li>
          <li>9 - asdasdasdadsadsadsadsads</li>
          <li>10 - asdasdasdadsadsadsadsads</li>
        </ul>
      </ListaProdutos>
    </Container>
  )
}
