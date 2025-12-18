import { schedulesDay } from "./form/load.js";

export function pageLoad(){
  if (typeof schedulesDay === "function") {
    schedulesDay();
  }
}

pageLoad();
