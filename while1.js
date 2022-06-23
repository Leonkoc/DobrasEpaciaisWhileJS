const nome = document.querySelector("h2");
const voltas = document.querySelector("h3");

let nomeNave = prompt("Informe o nome da nave: ");
let entrarDobra = prompt(`Deseja entrar em dobra espacial\n1-Sim\n2-Não`);
let nDobras = 1;
let dobraMais = 1;
while (entrarDobra == "1") {
  let entrarDobra = prompt(`Deseja realizar outra entrada?\n1-Sim\n2-Não`);
  if (entrarDobra == "2") {
    break;
  }
  nDobras += dobraMais;
}
console.log(nDobras);
alert(`A nave ${nomeNave} realizou ${nDobras} voltas!`);

nome.innerText = `A nave ${nomeNave} realizou:`;
voltas.innerText = `${nDobras} voltas`;
