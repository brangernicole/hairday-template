import { schedulesFetchByDay } from "../../services/schedules-fetch-by-day.js"
import{schedulesShow} from "../schedules/show.js"
import { hoursLoad } from "../form/hours-load.js";

//seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay(){
  if (!selectedDate) return;
  //obtém a data do input
  const date = selectedDate.value;

  //busca na API os agendamentos
  const dailySchedule = await schedulesFetchByDay({ date }); 

  //exibe os agendamentos
  schedulesShow({ dailySchedule });

  //renderiza as horas disponíveis.
  hoursLoad({ date, dailySchedule });

}