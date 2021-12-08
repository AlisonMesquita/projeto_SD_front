export interface Incidente {
    id: number;
    descricao: string;
    solucao?: string;
    imagem?: string;
    endereco: string;
    tipo: string;
    usuario: string;
    dataCriacao: Date;
    status: string;
    parecer: string;
}