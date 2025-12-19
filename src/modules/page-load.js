import { schedulesDay } from "./schedules/load.js";

export function pageLoad(){
  if (typeof schedulesDay === "function") {
    schedulesDay();
  }
}

pageLoad();
