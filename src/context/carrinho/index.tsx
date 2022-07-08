import { createContext, Dispatch,  ReactNode, SetStateAction, useState } from "react";

export interface ProdutoCarrinho {
  uniqueId: string;
  name: string;
  price: number;
  sellingPrice: number;
  imageUrl: string;
  detailUrl: string;
}

interface CarrinhoContextProps {
  dataCarrinho: ProdutoCarrinho[];
  setDataCarrinho: Dispatch<SetStateAction<ProdutoCarrinho[]>>
}

const valores_iniciais_carrinho = {
  dataCarrinho: [],
  setDataCarrinho: () => {},
};

export const CarrinhoContext = createContext<CarrinhoContextProps>(valores_iniciais_carrinho);

interface CarrinhoContextProviderProps {
  children: ReactNode;
}

export function CarrinhoContextProvider(props: CarrinhoContextProviderProps) {
  const [dataCarrinho, setDataCarrinho] = useState<ProdutoCarrinho[]>(valores_iniciais_carrinho.dataCarrinho);

  return (
    <CarrinhoContext.Provider value={{ dataCarrinho, setDataCarrinho }}>
      {props.children}
    </CarrinhoContext.Provider>
  );
}