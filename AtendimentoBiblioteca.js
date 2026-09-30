import { Leitor } from "./Leitor.js";
import { itemBase } from "./itemBase.js";

export class AtendimentoBiblioteca {
    cadastrarNovoLeitor(nome, idade){
        
    try {
        console.log(`\nIniciando atentimento`);
        const leito = new Leitor(nome, idade);
        leito.idade ();
        console.log(`Sucesso! carteirinha do leitor foi gerada!`);
    }

     catch (excecaoCapturada) {

        this.traduzirCodigoDeErro(excecaoCapturada.message) 
        }
         finally {
        console.log("Operação de cadastro finalizada. Guichê liberado para o próximo usuário da fila");

        }
}

        traduzirCodigoDeErro(codigoTecnicoDoErro) {

        switch (codigoTecnicoDoErro) {

        case "ERR_TIPO_IDADE_INVALIDO":
        console.log("Atenção: Os campos de idade do leitor aceitam apenas caracteres numéricos.");
        break;

         case "ERR_TIPO_ANO_INVALIDO":
        console.log("Atenção: Os campos de ano de publicação do leitor aceitam apenas caracteres numéricos.");
        break;
        
        case "ERR_ANO_FORA_DO_LIMITE":
        console. log("Aviso do Sistema: O ano de publicação do catálogo deve estar situado entre 1000 e 2026.");
        break;
        
        case "ERR_LEITOR_MENOR_IDADE":
        console. log("Aviso do Sistema: Leitores menores de 12 anos necessitam da presença física de um responsável para efetivação do cadastro.");
        break;

        default:
        console.log("Serviço Indisponível");
        }
    }
}