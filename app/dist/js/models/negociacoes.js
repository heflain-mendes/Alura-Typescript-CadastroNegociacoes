export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return this.negociacoes.map(resp => resp.paraTexto()).join(',\n');
    }
    ehIgual(obj) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(obj);
    }
}
//# sourceMappingURL=negociacoes.js.map