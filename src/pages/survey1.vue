<template>
  <f7-page>
    <f7-navbar title="Survey1" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-block-title>Опрос с одним вариантом ответа</f7-block-title>
      <f7-list>
        <label>
          <br>
          <input type="radio" value="Yes" v-model="form1">Yes
        </label>
        <br>
        <label>
          <br>
          <input type="radio" value="No" v-model="form1">No
        </label>
      </f7-list>
    </f7-block>

    <f7-list>
      <f7-list-item link="/survey2/" title="Survey2"></f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
  import store from "../store";
  import routes from "../routes.js";

  export default {
    data() {
      return {
        routes: routes,
      };
    },
    computed: {
      form1: {
        get() {
          return this.$store.state.form1
        },
        set(value) {
          this.$store.commit('addForm1', value)
        }
      }
    },
  };
</script>