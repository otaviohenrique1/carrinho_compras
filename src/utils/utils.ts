export function ajustaPreco(valor: number): string {
  let resultado = valor.toFixed(2).replace('.', ',');
  return resultado;
}