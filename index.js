import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { livroFisico, Ebook } from './TiposDeltens.js';
import { Leitor } from './Leitor.js';
const rl = readline.createInterface ({ input, output });
import { AtendimentoBiblioteca } from './AtendimentoBiblioteca.js';


async function iniciarSistema() {
    let livro;

    console.log("=== SISTEMA DE LOGISTICA BIBLIOTECA ===");
    const nome = await rl.question;
    const leitor = new AtendimentoBiblioteca();
    


    leitor.cadastrarNovoLeitor("adriano", "DEZ");
    leitor.cadastrarNovoLeitor("adriano", 10);
    leitor.cadastrarNovoLeitor("adriano", 25);
    console.log("\nSelecione o tipo de livro: ");
    console.log("1- Livro Físico");
    console.log("2- Ebook");
    const tipoDoLivro = await rl.question("Digite a opção: ");

    if (tipoDoLivro === "1" || tipoDoLivro === "2") {
        const titulo = await rl.question("Digite o título: ");
        const autor = await rl.question("Digite o autor: ");
        const anoDaPublicação = Number(await rl.question("Digite o ano da publicação: "));
        
        switch (tipoDoLivro) {
        case "1":
            const corredor = await rl.question("Digite o corredor: ");
            livro = new livroFisico(titulo, autor, anoDaPublicação, corredor);
            break;
        
            case "2":
                const Arquivo = await rl.question("Digite o formato do arquivo (PDF, EPUB...): ");
                livro = new Ebook(titulo, autor, anoDaPublicação, Arquivo);
        }
    } else {
    throw new error("Opção inválida");
    }

    const diasAtrasados = parseInt(await rl.question("Dias atrasados: "));
    const valorDaMulta = livro.calcularMulta(diasAtrasados);

    if(livro.Titulo === undefined || livro.Autor === undefined) {
    console.log("\n[ERRO] Titulo do livro não encontrado ou autor não encontrado");
}
else {
    console.log ("\n=====================================================================");
    console.log("========================= Etiqueta de Envio ============================");
    console.log ("=======================================================================");
    console.log(`Titulo do livro : ${livro.Titulo}`);
    console.log(`Autor do livro: ${livro.Autor}`);
    console.log(`Ano de publicação do livro: ${livro.anoPublicado}`);
    console.log(`\n Valor da multa: R$ ${valorDaMulta.toFixed(2)}`);
 }
rl.close();
}
iniciarSistema();