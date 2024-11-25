<template>
  <div class="list">
    <template v-if="loading">
      <p>Chargement des Pokémon...</p>
    </template>
    <template v-else>
      <PokemonCard
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import IPokemonApiData from '@/types/PokemonApiDataInterface';
import PokemonCard from './PokemonCard.vue';

interface IPokemon {
  id: number | string;
  name: string;
  nameEn: string;
  nameJp: string;
  primaryType: string | number;
  secondaryType: string | number | null;
}

export default defineComponent({
  name: 'PokemonList',
  components: { PokemonCard },
  setup() {
    // début de la partie consacrée à la liste de pokemons
    const pokemons = ref<IPokemon[]>([]);
    const loading = ref<boolean>(true); // servira pendant l'exec de fetchPokemon

    const fetchPokemons = async () => {
      try {
        // TODO : refactor avec .then et .catch de fetch au lieu d'await et try/catch
        const response = await fetch('http://localhost:3000/pokemons');
        if (!response.ok) throw new Error('Erreur lors de la récupération des données');

        const data = await response.json();
        pokemons.value = data.map((pokemon: IPokemonApiData) => {
          const [primaryType, secondaryType] = pokemon.type.includes('/')
            ? pokemon.type.split('/')
            : [pokemon.type, null];

          return {
            ...pokemon,
            primaryType,
            secondaryType: secondaryType || null,
          };
        });
      } catch (err) {
        console.log(err);
      } finally {
        loading.value = false;
      }
    };
    // fin de la partie consacrée à la liste de pokemons

    onMounted(() => {
      fetchPokemons();
    });

    return {
      pokemons,
      loading,
    };
  },
});
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>
