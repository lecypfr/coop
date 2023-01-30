import { reactive } from "vue";
import { defineStore } from "pinia";
import { useSessionStore } from "./session";
import { useRouter } from "vue-router";

export const useConversationStore = defineStore(
  "conversation",
  () => {
    const router = useRouter();
    const session_store = useSessionStore();

    let datas = reactive({
      conversations: [],
      conversation: {
        datas: {},
        messages: [],
        edit: false,
      },
    });

    function charger(conversation_id = false) {
      datas.conversation.edit = false;
      if (conversation_id) {
        datas.conversation.datas = {};
        api
          .get(
            `channels/${conversation_id}?token=${session_store.session.token}`
          )
          .then((reponse) => {
            if (reponse.message) {
              alert(reponse.message);
              vider();
            } else {
              datas.conversation.datas = reponse;
            }
          });
      } else {
        api
          .get(`channels?token=${session_store.session.token}`)
          .then((reponse) => {
            if (reponse.message) {
              alert(reponse.message);
              vider();
            } else {
              datas.conversations = reponse;
            }
          });
      }
    }

    function vider() {
      datas.conversations = [];
    }

    function chargerMessages(conversation_id) {
      datas.conversation.messages = [];

      api
        .get(
          `channels/${conversation_id}/posts?token=${session_store.session.token}`
        )
        .then((reponse) => {
          if (reponse.message) {
            alert(reponse.message);
          } else {
            datas.conversation.messages = reponse.reverse();
          }
        });
    }

    function ouvrir(dataForm) {
      api
        .post("channels", {
          body: {
            label: dataForm.label,
            topic: "Décrivez votre nouvelle conversation !",
            token: session_store.session.token,
          },
        })
        .then((reponse) => {
          if (reponse.message) {
            alert(reponse.message);
          } else {
            charger();
          }
        });
    }

    function editer() {
      datas.conversation.edit = false;
      api
        .put(`channels/${datas.conversation.datas.id}`, {
          body: {
            label: datas.conversation.datas.label,
            topic: datas.conversation.datas.topic,
            token: session_store.session.token,
          },
        })
        .then((reponse) => {
          if (reponse.message) {
            alert(reponse.message);
          } else {
            charger();
          }
        });
    }

    function supprimer() {
      api
        .delete(`channels/${datas.conversation.datas.id}`, {
          body: {
            token: session_store.session.token,
          },
        })
        .then((reponse) => {
          router.push("/");
          charger();
        });
    }

    function posterMessage(conversation_id, message) {
      return api
        .post(
          `channels/${conversation_id}/posts?token=${session_store.session.token}`,
          {
            body: {
              membre_id: session_store.session.member.id,
              message: message,
            },
          }
        )
        .then((reponse) => {
          chargerMessages(conversation_id);
        });
    }

    return {
      datas,
      charger,
      vider,
      chargerMessages,
      ouvrir,
      editer,
      supprimer,
      posterMessage,
    };
  },
  {
    persist: true,
  }
);
