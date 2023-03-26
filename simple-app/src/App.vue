<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {}
}
</script>

<template>
  <v-app id="app">
    <nav>
      <v-toolbar app color="green">
        <v-toolbar-title class="text-uppercase">Simple App</v-toolbar-title>
        <v-toolbar-items color="black">
          <v-btn to="/">Home</v-btn>
          <v-btn to="/about">About</v-btn>
          <v-btn to="/inc">Increase</v-btn>
          <v-btn to="/dec">Decrease</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </nav>

    <v-content>
      <RouterView v-slot="{ Component }">
        <Transition>
          <KeepAlive>
            <Component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </v-content>
  </v-app>
</template>
