<template>
  <div>
    <router-link to="/user/2">Go to Foo</router-link>
    <button @click="nextUser">Go to next user</button>
    <h1>this is page for info user : {{ name }}</h1>

    <router-link to="/">home page</router-link>
    <button @click="goHome">Go home</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "info-user",
  data() {
    return {
      name: "",
    };
  },
  watch: {
    // $route() {
    //   this.updateName();
    // },
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.updateName();
    console.log("ok");
  },
  beforeRouteLeave(to, from, next) {
    console.log(123);
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  methods: {
    updateName() {
      const id = this.$route.params.id;
      // let id = this.id;
      const user = this.$store.state.users.find((item) => item.id == id);
      this.name = user.name;
      // console.log(this.$router);
    },
    nextUser() {
      this.$router.push({ path: "/user/2" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.updateName();
    console.log(this.$route);
  },
  updated() {
    // console.log(this.$router.history);
  },
};
</script>
