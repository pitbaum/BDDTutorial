<head>
    <title>Dashboard</title>
</head>

<template>
  <div v-show="isValid" id="welcome">
    <span>{{ welcomeMSG }}</span>
    <span> {{ errorMSG }}</span>
    <p></p>
    <input
      type="submit"
      value="Log out"
      v-on:click="checkLogout"
      data-testid="logoutBtn"
    />
  </div>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  async mounted() {
    let authen = "";
    if (VueCookies.isKey("token")) authen = VueCookies.get("token").token;
    else authen = "NULL"; //if we enter without token, the backend will get a NULL string as token.

    let payload = { token: authen };
    let response = await axios.post("/dashboard", payload);
    if (response.status === 200) {
      //reserve 200 for try without token.
      this.$router.push("/login");
    }
    if (response.status > 200 && response.status <= 209) {
      this.isValid = true;
      this.welcomeMSG = response.data.welcome; //include personal welcome msg.
    } else this.$router.push("/login"); //invalid anwser go to the home.
  },

  data() {
    return {
      welcomeMSG: "Welcome to the Dashboard",
      errorMSG: "",
      isValid: false, // should the page be visible.
    };
  },

  methods: {
    async checkLogout(e) {
      //removes the token, thus making it the non-logged in state.
      //and sends a deletion request to the backend.
      e.preventDefault();
      if (VueCookies.isKey("token")) {
        let payload = { token: VueCookies.get("token").token };
        const env = this; //need the environement in the axios.
        await axios.post("/dashboard", payload).then(function (response) {
          if (response.status === 201) {
            VueCookies.remove("token");
            env.$router.push("/login");
          } else env.errorMSg = response.status + " seems the like the server couldnt be reached";
        });
      } else this.$router.push("/login");
    },
  },
};
</script>
