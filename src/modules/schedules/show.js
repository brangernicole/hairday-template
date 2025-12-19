import dayjs from "dayjs";

//seleciona as sessões, manhã, tarde e noite
const periodmorning = document.getElementById("period-morning");
const periodafternoon = document.getElementById("period-afternoon");
const periodnight = document.getElementById("period-night");

export function schedulesShow({ dailySchedule}) {
  try {
    //limpa as listas
    periodmorning.innerHTML = "";
    periodafternoon.innerHTML = "";
    periodnight.innerHTML = "";

    //renderiza os agendamentos por período
    dailySchedule.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      //adiciona o id do agendamento 
      item.setAttribute("data-id", schedule.id);

      time.textContent = dayjs(schedule.when).format("HH:mm");
      name.textContent = schedule.name;

      //cria o ícone de cancelamento
      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg");
      cancelIcon.setAttribute("alt", "Ícone de cancelamento");

      //adiciona o tempo, nome e ícone ao item da lista
      item.append(time, name, cancelIcon);

      //obtém somente a hora
      const hour = dayjs(schedule.when).hour();

      //renderiza o agendamento na sessão(manhã, tarde ou noite)
      if(hour <= 12){
        periodmorning.appendChild(item);
      }else if (hour > 12 && hour <= 18){
        periodafternoon.appendChild(item);
      }else{
        periodnight.appendChild(item);
      }


   }) 
  }catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error);
  }
}