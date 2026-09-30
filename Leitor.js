export class Leitor {
#idade

constructor(nome, idade) {
this.nome = nome;
this.#idade = idade;
}

get idade() {
    return this.#idade
}
idade () {
 if (typeof this.#idade !== "number" || isNaN (this.#idade)) {
throw new Error("ERR_TIPO_IDADE_INVALIDO");
 }
if (this.#idade < 12){
    console.log("[BLOQUEIO] não pode menor de 12 anos");
    throw new Error("ERR_LEITOR_MENOR_IDADE");
}
return;
}
}