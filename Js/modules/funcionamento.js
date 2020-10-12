export default function initFuncionamento() {

const funcionamento = document.querySelector("[data-semana]");
const diasDaSemana = funcionamento.dataset.semana.split(",").map(Number);
const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

const dataAgora = new Date();
console.log(dataAgora)
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

const semanaAberto = diasDaSemana.indexOf(diaAgora) !== -1;
const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];


  if(semanaAberto && horarioAberto){
      funcionamento.classList.toggle('aberto')
  }
}