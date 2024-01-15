/*
window.confirm('voce e gay?')
var nome = window.prompt('qual seu nome?')
window.alert('e um prazer te conhecer , ' + nome)

var n1 = Number(window.prompt('Digite um numero: ')) // string
var n2 = Number(window.prompt('Digite outro numero: '))
var s = n1 + n2 
window.alert(`A soma entre ${n1} e ${n2} e igual a ${s}`)
*/

var nome = window.prompt('Qual e o seu nome?')
document.write(`Ola, <strong>${nome} </strong>! Seu nome tem  ${nome.length} letras. <br> `)
document.write(`Seu nome em Maiusculo e ${nome.toUpperCase()} <br> `)
document.write(`Seu nome em Minusculo e ${nome.toLowerCase()} `)