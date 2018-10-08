<template>
  <f7-page>

    <f7-navbar title="Result"></f7-navbar>
    <f7-block>
      <f7-block-title>Результаты опроса</f7-block-title>
      <f7-block>
        <f7-block-title>Опрос с одним вариантом ответа</f7-block-title>
        <f7-list>
          <f7-list-item>
            {{ form1 }}
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title>Опрос с множественным выбором вариантов ответа</f7-block-title>
        <f7-list>
          <f7-list-item v-for="form in form2" :key="form.title" :title="form.title">
          </f7-list-item>
        </f7-list>
        {{ form2 }}
      </f7-block>
      <f7-block>
        <f7-block-title>Опрос со своим вариантом ответа</f7-block-title>
        <f7-list>
          <f7-list-item v-for="form in form3" :key="form.title" :title="form.title">
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title>Оценочный опрос</f7-block-title>
        <f7-list>
          <f7-list-item>
            {{ form4 }}
          </f7-list-item>
        </f7-list>
      </f7-block>
      <f7-block>
        <f7-block-title>Опрос смешанного типа</f7-block-title>
        <f7-list>
          <f7-list-item v-for="form in form5" :key="form.title" :title="form.title">
          </f7-list-item>
        </f7-list>
      </f7-block>
      </f7-list>
    </f7-block>

  </f7-page>
</template>

<script>
  import store from '../store';
  import routes from '../routes.js';

  export default {
    data() {
      return {
        routes: routes,
        form1: store.getters.getForm1,
        form2: store.getters.getForm2,
        form3: store.getters.getForm3,
        form4: store.getters.getForm4,
        form5: store.getters.getForm5,
      };
    },
  };
</script>