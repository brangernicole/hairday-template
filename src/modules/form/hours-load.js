import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date }){
//limpa a lista de horários
hours.innerHTML = ""

  if (!date) return [];
  const opening = openingHours.map((hour) => {
    //recupera somente a hora
    const schedule = hour.split(":");
    const scheduleHour = Number(schedule[0]);

    //adiciona a hora na data e verifica se está no passado 
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    return {
      hour,
      available: !isHourPast,
    }
  })
//renderiza os horários.
opening.forEach(({hour, available}) => {
  const li = document.createElement("li");

  li.classList.add("hour")
  li.classList.add(available ? "hour-available" : "hour-unavailable")

  li.textContent = hour

  if(hour === "9:00"){
    HourHeaderAdd("Manhã")
  }else if(hour === "13:00"){
    HourHeaderAdd("Tarde")
  }else if(hour === "18:00"){
    HourHeaderAdd("Noite")
  }
  hours.appendChild(li);

})

//adiciona o evento de clique nos horários disponíveis
hoursClick();
}

function HourHeaderAdd(tittle){
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = tittle

  hours.append(header)
}