import Produto from "../exercicio02/produto";
import "./produtos.css";
function Produtos() {
    const produtos = [
        {
            id: 1,
            nome: "Notebook",
            preco: 3000.00,
            descricao: "Notebook Gamer."
        },
        {
            id: 2,
            nome: "Jordan 1",
            preco: 1200.00,
            descricao: "Tênis Jordan 1."
        },
        {
            id: 3,
            nome: "Blusa Jordan",
            preco: 400.00,
            descricao: "Blusa Jordan."
        }
    ];

    return produtos.map((produtinho) => {
            return (
           <Produto nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                    key={produtinho.id}
           />
            );
         }

            )
}



        
         

         
        
   

export default Produtos;