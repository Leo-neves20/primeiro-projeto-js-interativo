let nome            = window.prompt("Qual é o seu nome?")
document.write(`<p><strong>Seu nome:</strong> ${nome}</p>`)
let sobreNome       = window.prompt("Escreva seu sobre nome")
document.write(`<p><strong>Seu sobre nome:</strong> ${sobreNome}</p>`)
let idade           = window.prompt("Quantos anos Você tem?")
document.write(`<p><strong>Sua ideade:</strong> ${idade}</p>`)
let cidade          = window.prompt("Em qual cidade você mora?")
document.write(`<p><strong>Sua cidade:</strong> ${cidade}</p>`)
let anoAtual        = window.prompt("Em qual ano estamos?")
let anoNascimento   =  anoAtual - idade
document.write(`<p><strong>Ano de nascimento:</strong> ${anoNascimento}</p>`)
