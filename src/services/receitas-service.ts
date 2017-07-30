import { Ingrediente } from "../models/ingredientes";
import { Receita } from "../models/receita";

export class ReceitasService {

    private receitas: Receita[] = [];

    adicionaReceita(nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas.push(new Receita(nome, descricao, dificuldade, ingredientes));

    }

    getReceitas() {
        return this.receitas.slice();
    }

    alteraReceita(index: number, nome: string, descricao: string, 
                    dificuldade: string, ingredientes: Ingrediente[]) {
        this.receitas[index]=new Receita(nome, descricao, dificuldade, ingredientes);
    }

    removeReceita(index: number) {
        this.receitas.splice(index, 1);
    }

}