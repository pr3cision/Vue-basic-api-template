const app = Vue.createApp({
  // Parse les information dans l'apps
  data() {
    return {
      firstName: "Benjamin",
      lastName: "Lemoine",
      email: "benjamin.l@email.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/75.jpg",
    };
  },
  methods: {
    /**
     * Utilisation method async fetch pour utiliser
     * l'api random user pour aller chercher un user random
     */
    async getUser() {
      //Connexion API
      const res = await fetch("https://randomuser.me/api/");

      //Stockage donne Json dans une variable
      const { results } = await res.json();

      //Utilisation du resultats
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

/**
 * Inject le script dans la balise #app du index.html
 */
app.mount("#app");
