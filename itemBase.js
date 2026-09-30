export class itemBase{
#anoPublicado;

constructor(tituloIN, autorIN, anoPublicadoIN) {
if (new.target === itemBase){
    throw new error("[Erro] Nao é permitido cadastrar um item generico")
}
this.Titulo = tituloIN;
 this.Autor = autorIN;
 this.anoPublicado = anoPublicadoIN;
}

get anoPublicado() { this.#anoPublicado}

set anoPublicado(anoPublicadoIN) {
    if ( anoPublicadoIN <= 1000 || anoPublicadoIN >= 2026){
        throw new error("ERR_ANO_FORA_DO_LIMITE");
}
    if (typeof anoPublicadoIN !== "number" || isNaN (anoPublicadoIN)) {
throw new Error("ERR_TIPO_ANO_INVALIDO");
}
return;
}

calcularMulta() {
 throw new error("A classe filha precisa implementar o cálculo de multa 'calcularMulta()'!)");
}
}