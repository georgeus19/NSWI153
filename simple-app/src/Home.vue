<script>
export default {
  data() {
    return {
      text: ''
    }
  }
}
</script>

<template>
  <div id="home">
    <div class="d-flex flex-column">
      <v-btn @click="text = ''">Clear</v-btn>
      <v-label for="text">Input text:</v-label>
      <v-text-field type="text" name="text" id="text" v-model="text" />
      <v-label>Input text: {{ text }}</v-label>
    </div>
  </div>
</template>
