import { Noticias } from "./interfaces/noticias_model"; // Interface

export const NOTICIAS: Noticias[] = [
    {
        id: 1,
        descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        titulo: "Problema - Iluminação Pública",
        imagem: "",
        dataCriacao: "27-09-09",
        usuario: "Diego",
        categoria: "Iluminação Pública"
    },
    {
        id: 2,
        descricao: "Pessoas estão sendo assaltadas na saída da cidade após 2h da manhã.",
        titulo: "Problema - Segurança",
        imagem: "",
        dataCriacao: "27-09-09",
        usuario: "Diogo",
        categoria: "Segurança"
    }
]