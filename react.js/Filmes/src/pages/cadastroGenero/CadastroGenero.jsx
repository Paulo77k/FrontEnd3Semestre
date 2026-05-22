import "./CadastroGenero.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react";
import api from "../../Services/Services"

const CadastroGenero = (props) => {
    //variaveis e state 
    const [valor, setValor] = useState("")
    const [listaGeneros, setListaGeneros] = useState([])

    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/generos") //chama a api

            setListaGeneros(retornoAPI.data)
        } catch (error) {
            alert("Problemas ao carregar os dados da API")
        }
    }

    useEffect(() => {
        getGeneros()
    }, [])
    
    const cadastrarGenero = async (e) => {
        e.preventDefault();

        if(valor.trim().length == 0) {
            alert("Preencher o genero")
            return false
        }

        const objCadastro = {
            nome : valor
        }

        try {
            const retornoAPI = await api.post("/generos", objCadastro)
            alert("cadastrado com sucesso!") 

            getGeneros()
            limparFormulario()
        } catch (error) {
            alert("Erro ao cadastrar na API")
            console.log(error);
        }
    }

    const limparFormulario = () => {
        setValor("")
    }

    const excluirGenero = (item) => {
        // Implement the delete functionality here  
        try { 
            const retornoAPI = api.delete(`/generos/${item.id}`)
            alert("Gênero excluído com sucesso!")
            getGeneros()
            
        } catch (e) {
            alert("Erro ao excluir o gênero")
            console.log(e);
        }
       
    }

    const editarGenero = () => {
        alert("Função Editar Gênero em desenvolvimento")
    }

    //o JSX em si (XML e HTML)
    return (
        <>
            <Header />
            <main>
            {/* Form de cadastro de Generos*/}
            
              <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                     valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}
                />

                {/* Lista de Generos*/}
              <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"

                    funcExcluir = {excluirGenero}
                    funcEditar = {editarGenero}
                />
            </main>
        <Footer />
        </>
        
    )
}

export default CadastroGenero

