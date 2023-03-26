<script>
import { store } from './store.js'

export default {
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <v-btn @click="store.count++">{{ store.count }}</v-btn>
</template>
