import { useState } from "react";
import { Navbar } from "../components/Navbar";

export function Hamburguer() {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(false);
    const buscarProdutos = async () => {

        const res = await fetch("http://localhost:3000/produtos")
        const produto = await res.json();
        console.log(produto)
    }
    return (
        <div>
            <Navbar />
            <div className="flex flex-col gap-20 justify-center items-center h-screen">
                <h1 className="text-3xl">Page Hamburguer</h1>
                <button onClick={produtos}>Clique aqui</button>
                <p>isso{produtos.nome}</p>
            </div>
        </div>
    )
}