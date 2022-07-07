import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CarrinhoCompras } from "./CarrinhoCompras";
import { Home } from "./Home";
import { Produtos } from "./Produtos";
import { TelaMensagem } from "./TelaMensagem";

export function RouterApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/tela_mensagem" element={<TelaMensagem/>} />
          <Route path="/carrinho_compras" element={<CarrinhoCompras/>} />
          <Route path="/produtos" element={<Produtos/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}