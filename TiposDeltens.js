import { itemBase } from "./itemBase.js";

export class livroFisico extends itemBase {
    constructor(tituloIN, autorIN, anoPublicadoIN,corredor){
        super(tituloIN, autorIN, anoPublicadoIN,);
         this.corredor = corredor;
    }
    calcularMulta(diasAtrasados) {
        let multa = diasAtrasados * 2.50 ;
        console.log(`[MULTA] multa por atraso de livro fisico ${this.diasAtrasados} é R$ ${multa}`);
        return multa;
    }
}
 export class Ebook extends itemBase {
constructor(tituloIN, autorIN, anoPublicadoIN, formatoArquivo){
        super(tituloIN, autorIN, anoPublicadoIN,);
         this.formatoArquivo = formatoArquivo;
    }
calcularMulta(diasAtrasados){
console.log("[SISTEMA] Arquivo bloqueado. Acesso revogado no dispositivo do leitor");
return 0.00;
}
}