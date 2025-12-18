import { apiConfig } from "./api-config.js"

export async function schedulesNew({ id, name, when }){
  try{
    await fetch(`${apiConfig.baseURL}/schedules`,{
      method: 'POST',
      headres:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({id, name, when}) 
    })
    alert("Agendamento realizado com sucesso!")
   }catch(error){
    console.error(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
   }
}