<template>
  <div class="card">
    <img
      :src="imageArtworkUrl(pokemon.id)"
      :alt="pokemon.name"
      class="pokemon-artwork"
    />
    <h3>{{ pokemon.name }}</h3>
    <p>ID régional : {{ pokemon.id }}</p>
    <div class="types">
      <img class="type-icon" :src="imageTypeUrl('1')" alt="" srcset="" />
      <img
        class="type-icon"
        v-if="pokemon.secondaryType"
        :src="imageTypeUrl(pokemon.secondaryType)"
        alt=""
        srcset=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import IPokemon from '@/types/PokemonInterface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object as PropType<IPokemon>,
      required: true,
    },
  },
  methods: {
    // permet de recuperer l'image du type
    imageTypeUrl(type: string | number) :string {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/${type}.png`;
    },
    // permet de recuperer l'artwork du pokemon grace a son id
    imageArtworkUrl(id: string | number): string {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${id}.png`;
    },
  },
});
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.types {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.type-icon {
  width: 40px;
  height: 15px;
}
</style>
