import dayjs from "dayjs"
import { apiConfig } from "./api-config"

export async function schedulesFetchByDay({date}) {
  try{
    //faz a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    //converte a resposta em JSON
    const data = await response.json()

    //filtra os agendamentos pela data informada
    const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day")
  )

    return dailySchedules
  }catch(error){
    console.error(error);
    alert("Não foi possível carregar os agendamentos do dia.");
  }
}