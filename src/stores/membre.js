import { reactive } from "vue";
import { defineStore } from "pinia";
import { useSessionStore } from "./session";

export const useMembreStore = defineStore(
  "membre",
  () => {
    let datas = reactive({
      membres: [],
    });

    function charger(membre_id = false) {
      if (membre_id) {
        return api.get(`members`).then((reponse) => {
          if (reponse.message) {
            alert(reponse.message);
          } else {
            return reponse.find((element) => element.id == membre_id);
          }
        });
      } else {
        return api.get(`members`).then((reponse) => {
          if (reponse.message) {
            alert(reponse.message);
          } else {
            datas.membres = reponse;
          }
        });
      }
    }

    function vider() {
      datas.membres = [];
    }

    return { datas, charger, vider };
  },
  {
    persist: true,
  }
);
