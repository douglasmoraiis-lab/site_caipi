// src/types.ts
export interface Adicional {
    id?: string; // opcional, mas útil pra checar seleção
    nome: string;
    preco: number;
}

export interface CartItem {
    id: string;
    nome: string;
    preco: number;
    quantidade: number;
    imageUrl?: string; // agora é opcional
    adicionais?: Adicional[]; // adicionais já selecionados
    possibleAdicionais?: Adicional[]; // opções disponíveis para esse item (subcard inline)
}
