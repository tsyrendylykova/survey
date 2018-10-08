<template>
  <f7-page>
    <f7-navbar title="Survey5" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-block-title>Опрос смешанного типа</f7-block-title>
      <f7-list form>
        <f7-list-item v-for="n in 3" :key="n" checkbox name="my-checkbox" :value="n" :title="'Checkbox ' + n"></f7-list-item>
        <f7-list-item>
          <f7-input v-on:keypress="addForm5" v-model="answer5" type="text" placeholder="Add"></f7-input>
        </f7-list-item>
      </f7-list>
      <f7-button v-on:click="addForm5" color="blue" fill>Add</f7-button>
    </f7-block>

    <f7-list>
      <f7-list-item link="/result/" title="Result"></f7-list-item>
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
        answer5: ''
      };
    },
    methods: {
      async addForm5(e) {
        if (
          (e && e.type === "keypress" && e.keycode === 13) ||
          e.type === "click"
        ) {
          await store.dispatch("addForm5", { title: this.answer5 });
        }
      }
    }
  };
</script>