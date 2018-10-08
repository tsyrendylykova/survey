<template>
  <f7-page>
    <f7-navbar title="Survey3" back-link="Back"></f7-navbar>

    <f7-block>
      <f7-block-title>Опрос со своим вариантом ответа</f7-block-title>
      <f7-list>
        <f7-list-item>
          <f7-input v-on:keypress="addForm3" v-model="answer3" type="text" placeholder="Add"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-button v-on:click="addForm3" color="blue" fill>Add</f7-button>
    </f7-block>

    <f7-list>
      <f7-list-item link="/survey4/" title="Survey4"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  import store from "../store";
  import routes from "../routes.js";

  export default {
    data() {
      return {
        answer3: "",
        routes: routes,
      };
    },
    methods: {
      async addForm3(e) {
        if (
          (e && e.type === "keypress" && e.keycode === 13) ||
          e.type === "click"
        ) {
          await store.dispatch("addForm3", { title: this.answer3 });
        }
      }
    }
  };
</script>