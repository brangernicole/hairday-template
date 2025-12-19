import dayjs from "dayjs";
import {schedulesNew } from "../../services/schedules-new.js";
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//carrega a data atual e define a data mínima como sendo a data atual
if (selectedDate) {
  selectedDate.value = inputToday;
  selectedDate.min = inputToday;
}

if (form) {
  form.onsubmit = async (event) => {
    //previne o comportamento padrão de carregar a página
    event.preventDefault();

    try {
      //recuperando o nome do cliente
      if (!clientName) return alert("Campo do cliente não encontrado!");
      const name = clientName.value.trim();

      if (!name) {
        return alert("Informe o nome do cliente!");
      };
      //recupera o horário selecionado
      const hourSelected = document.querySelector(".hour-selected");

      //recupera o horário selecionado
      if(!hourSelected){
        return alert("Selecione um horário para o agendamento!")
      }

      //recupera somente a hora
      const [hour] = hourSelected.innerText.split(":");

      //insere a hora na data
      if (!selectedDate) return alert("Campo de data não encontrado!");
      const when = dayjs(selectedDate.value).add(Number(hour), "hour");

      //gera um ID
      const id = new Date().getTime();

      //faz o agendamento
      await schedulesNew({ id, name, when });
      //recarrega os agendamentos
      await schedulesDay()

      //limpa o input de nome do cliente
      clientName.value = ""
      
    }catch(error){
     console.error(error);
     alert("Não foi possível realizar o agendamento.");
    }
  };
}
