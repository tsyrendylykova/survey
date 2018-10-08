<template>
  <div id="app">
    <f7-statusbar></f7-statusbar>

    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>Sberseasons</f7-nav-center>
            </f7-navbar>

            <f7-list>
              <f7-list-item link="/survey1/" title="Start"></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
  </div>
</template>

<script>

import store from './store'

export default {}
</script>