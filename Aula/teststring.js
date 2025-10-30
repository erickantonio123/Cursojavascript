let umastring = " ola teste ou";
                // 0123456789
let testestring = 'O rato roeu o rei de roma'
console.log(umastring[5])   
console.log(umastring.charAt(3)); 
console.log(umastring.charAt(5))
console.log(umastring.charAt(12))
console.log(`${umastring} vai dar certo`)
console.log (umastring.indexOf('a'))
console.log(umastring.lastIndexOf('o'))
console.log(umastring.match(/[a-z]/));
console.log(umastring.search(/[a-z]/ , 'teste'))
console.log(testestring.replace(/r/g, '#'))
console.log(testestring.slice (2,11))
console.log(testestring.split('a'))
console.log(testestring.split(' ', 3))
console.log(testestring.toUpperCase())
console.log(testestring.toLowerCase())