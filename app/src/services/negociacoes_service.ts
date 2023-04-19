import { NegociacaoDoDia } from "../interfaces/negociacao_do_dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public obterNegociacoes() : Promise<Negociacao[]>{
        return fetch('http://localhost:8080/dados')
        .then(resp => resp.json())
        .then((dados: NegociacaoDoDia[]) => {
            return dados.map((dadoHoje)=>{
                return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
            })
        })
    }
}