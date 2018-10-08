<template>
  <f7-page>
    <f7-navbar title="Survey4" back-link="Back"></f7-navbar>
    <f7-block>
    <f7-block-title>Оценочный опрос</f7-block-title>
    <f7-list form>
      <f7-list-item>
        <f7-label>От 0 до 10</f7-label>
        <f7-input>
          <input type="range" min="0" max="10" step="1" v-model="form4"/>
        </f7-input>
      </f7-list-item>
      <f7-list-item>
        {{ form4 }}
      </f7-list-item>
    </f7-list>
    </f7-block>
    <f7-list>
      <f7-list-item link="/survey5/" title="Survey5"></f7-list-item>
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
    form4: {
      get() {
        return this.$store.state.form4
      },
      set(value) {
        this.$store.state.form4 = value
      }
    }
  },
};
</script>