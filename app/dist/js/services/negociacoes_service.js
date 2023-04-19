import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(resp => resp.json())
            .then((dados) => {
            return dados.map((dadoHoje) => {
                return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes_service.js.map