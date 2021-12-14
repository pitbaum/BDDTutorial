<head>
    <title>Dashboard</title>
</head>

<template>
  <div v-show="isValid" id="welcome">
    <span>{{ welcomeMSG }}</span>
    <span> {{ errorMSG }}</span>
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
  }
};
</script>
