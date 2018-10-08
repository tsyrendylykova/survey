<template>
  <f7-page>
    <f7-navbar title="Survey2" back-link="Back"></f7-navbar>
    <f7-block>
      <f7-block-title>Опрос с множественным выбором вариантов ответа</f7-block-title>
      <f7-list>
        <div>
          <div v-for='item in items'>
            <br>
            <input type='checkbox' :key='item.value' :value='item.value' v-model='selectedItems' @change='updateValue' />
            <label>{{ item.label }}</label>
          </div>
        </div>
      </f7-list>
      <label>{{ selectedItems.join(', ') }}</label>
    </f7-block>

    <f7-list>
      <f7-list-item link="/survey3/" title="Survey3"></f7-list-item>
    </f7-list>

  </f7-page>
</template>

<script>
  import store from '../store';
  import routes from '../routes.js'

  export default {
    props: ['value'],
    data() {
      return {
        routes: routes,
        items: [
          { label: 'Item 1', value: 'ITEM_1' },
          { label: 'Item 2', value: 'ITEM_2' },
          { label: 'Item 3', value: 'ITEM_3' },
          { label: 'Item 4', value: 'ITEM_4' },
          { label: 'Item 5', value: 'ITEM_5' }
        ],
        selectedItems: this.value || [],
      };
    },
    mutations: {},
    methods: {
      updateValue() {
        this.$emit('input', this.selectedItems)
      },
    },
  };
</script>