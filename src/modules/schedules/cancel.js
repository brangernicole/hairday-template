import { schedulesDay } from "./load" 
import  { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gera evento de clique para cada lista (manhã, tarde e noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a <li> pai do elemento clicado
      const item = event.target.closest("li")

      //pega o id do agendamento para remover
      const { id } = item.dataset

      //confirma que o id foi selecionado
      if (id) {
        //confirma se o usuário quer cancelar
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")

        if (isConfirm) {
          //faz a requisição para cancelar o agendamento
          await scheduleCancel({ id })

          //recarrega os agendamentos do dia
          schedulesDay()

        }
      }
    }
  })
})
