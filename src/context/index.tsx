import { ReactNode } from "react";
import { CarrinhoContextProvider } from "./carrinho/index";

interface GlobalContextProps {
  children: ReactNode;
}

export default function GlobalContext(props: GlobalContextProps) {
  const { children } = props;

  return (
    <CarrinhoContextProvider>{children}</CarrinhoContextProvider>
  )
}
