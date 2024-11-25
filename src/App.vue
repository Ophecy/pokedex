<template>
  <div id="app">
    <header class="header">
      <h1 class="title">Pokédex</h1>
    </header>
    <router-view />
  </div>
  <pokemonList></pokemonList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokemonList from './components/PokemonList.vue';

export default defineComponent({
  name: 'App',
  components: {
    PokemonList,
  },
});
</script>

<style scoped>
.header {
  background-color:#3b4cca;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 4px solid  #ffcb05;
}

.title {
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;
  color:  #ffcb05;
  margin: 0;
}
</style>
