export function escapa(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const original = descriptor.value;
    descriptor.value = function(...args: any){
        let retorno = original.apply(this, args);
        if(typeof retorno === 'string'){
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }

        return retorno;
    }

    return descriptor;
}