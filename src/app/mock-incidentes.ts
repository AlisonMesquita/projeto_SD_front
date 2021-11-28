import { Incidente } from "./interfaces/incidentes_model";

export const INCIDENTES: Incidente[] = [
    {
        id: 1,
        descricao: "Poste com luz defeituosa",
        solucao: "",
        imagem: "",
        endereco: "Rua Capitão Maciel",
        tipo: "Iluminação",
        usuario: "Rafael Souza",
        dataCriacao: "27-11-2021", 
        status: "Cadastrado"
    },
    {
        id: 2,
        descricao: "Ponte parece estar prestes a cair",
        solucao: "",
        imagem: "",
        endereco: "Rua Capitão Maciel",
        tipo: "Estrutura Defeituosa",
        usuario: "Diego Souza",
        dataCriacao: "17-01-2021",
        status: "Cadastrado"
    },
    {
        id: 3,
        descricao: "Risco de enchente no bairro",
        solucao: "",
        imagem: "",
        endereco: "Rua Capitão Maciel",
        tipo: "Catástrofes Naturais",
        usuario: "João Souza",
        dataCriacao: "07-10-2021",
        status: "Cadastrado"
    },
    {
        id: 4,
        descricao: "Barragem preste a romper",
        solucao: "",
        imagem: "",
        endereco: "Rua Capitão Maciel",
        tipo: "Catástrofes Naturais",
        usuario: "Diogo Souza",
        dataCriacao: "27-11-2021",
        status: "Cadastrado"
    },
    {
        id: 5,
        descricao: "Qualquer outro problema aqui",
        solucao: "",
        imagem: "",
        endereco: "Rua Capitão Maciel",
        tipo: "Desconhecido",
        usuario: "John Doe",
        dataCriacao: "01-11-2021",
        status: "Cadastrado"
    }
]