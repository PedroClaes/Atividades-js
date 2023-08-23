const hobbies = ['futebol', 'apostas','sexo'];

console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

hobbies[2] = 'Sao paulo';

console.log(hobbies);

console.log(hobbies.length);

hobbies.push('viajar')

console.log(hobbies);

hobbies.pop();

console.log(hobbies);

let posicao = hobbies.indexOf('futebol');

hobbies.splice(posicao, 1);

hobbies.splice(1, 1);

console.log(hobbies)

const hobbiesDoAmigo = ['cantar','dançar', 'tocar violão'];

const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);

console.log(todosOsHobbies);

const hobbiesMusicais = ['cantar', 'dançar', 'escutar música'];

const hobbiesEsportivos = ['correr', 'jogar futebol', 'nadar'];

const hobbiesCriativos = ['desenhar', 'escrever histórias', 'fazer esculturas'];

const categoriasDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesCriativos];

console.log(categoriasDeHobbies[0]);

categoriasDeHobbies[0][0]

console.log(categoriasDeHobbies[0][0]);

categoriasDeHobbies[0][2]

console.log(categoriasDeHobbies[0][2]);