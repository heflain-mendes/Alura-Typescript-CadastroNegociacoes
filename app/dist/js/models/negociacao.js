export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    paraTexto() {
        return `
            Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}
        `;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    ehIgual(negociacao) {
        return this._data.getDate() === negociacao.data.getDate() &&
            this._data.getMonth() === negociacao.data.getMonth() &&
            this._data.getFullYear() === negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map