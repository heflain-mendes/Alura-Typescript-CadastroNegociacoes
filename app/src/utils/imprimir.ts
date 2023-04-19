import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objetos : Imprimivel[]){
    for(let obj of objetos){
        console.log(obj.paraTexto());
    }
}