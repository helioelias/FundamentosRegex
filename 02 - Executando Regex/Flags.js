
// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'

console.log(texto.match(/C|ab/)) //vai localizar C ou ab

console.log(texto.match(/c|ab/i))

console.log(texto.match(/ab|c/gi))
