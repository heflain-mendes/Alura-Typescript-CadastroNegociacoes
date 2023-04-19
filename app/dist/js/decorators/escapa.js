export function escapa(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = original.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapa.js.map