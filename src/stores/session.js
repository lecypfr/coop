import { reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import { useConversationStore } from "./conversation";
import { useMembreStore } from "./membre";

export const useSessionStore = defineStore(
  "session",
  () => {
    const router = useRouter();
    const conversation_store = useConversationStore();
    const membre_store = useMembreStore();

    let session = reactive({
      member: false,
      token: false,
    });

    function inscription(dataForm) {
      api.post("members", { body: dataForm }).then((reponse) => {
        if (reponse.message) {
          alert(reponse.message);
        } else {
          session.member = reponse.member;
          session.token = reponse.token;
          ok();
          router.push("/");
        }
      });
    }

    function connexion(dataForm) {
      api.post("members/signin", { body: dataForm }).then((reponse) => {
        if (reponse.message) {
          alert(reponse.message);
        } else {
          session.member = reponse.member;
          session.token = reponse.token;
          conversation_store.charger();
          membre_store.charger();
          session.ok = true;
          router.push("/");
        }
      });
    }

    function deconnexion() {
      api
        .delete("members/signout", {
          body: { token: session.token },
        })
        .then((reponse) => {
          session.member = false;
          session.token = false;
          conversation_store.vider();
          membre_store.vider();
          session.ok = false;
          router.push("/se-connecter");
        });
    }

    async function ok() {
      if (session.token) {
        const response = await api.get(
          `members/${session.member.id}/signedin?token=${session.token}`
        );

        const d = await response;

        if (d.token) {
          session.ok = true;
          return true;
        } else {
          session.ok = false;
          router.push("/se-connecter");
        }
      } else {
        session.ok = false;
        return false;
      }
    }

    return { session, connexion, inscription, deconnexion, ok };
  },
  {
    persist: true,
  }
);
