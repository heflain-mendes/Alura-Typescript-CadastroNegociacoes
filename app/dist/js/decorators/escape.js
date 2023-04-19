export function escape(target, propertyKey, descriptor) {
    const original = descriptor.value;
    return function (...args) {
        let retorno = original.apply(this, args);
        if (typeof retorno === 'string') {
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
}
