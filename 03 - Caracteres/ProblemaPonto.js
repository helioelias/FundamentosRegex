const texto = 'Bom\ndia'
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) //o ponto não engloba o \n

// dotall - algumas linguaguens tem uma flag /exp/s, mas JS não