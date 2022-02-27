<template>
  <h1>Twitch Pokedex</h1>
  <input type="text" v-model="filterText">
  <ul>
    <pokedex-card 
      v-for="(pokemon, index) in pokemonStore.filteredList" 
      :key="`poke-${index}`" 
      :number="pokemon.entry_number"
      :name="pokemon.pokemon_species.name"
    >
      <!-- #{{ pokemon.entry_number }} - {{ pokemon.pokemon_species.name }} -->
    </pokedex-card>
  </ul>
</template>

<script setup>
import PokedexCard from './components/PokedexCard.vue';
import { ref, reactive, onMounted, computed }  from 'vue'

const pokemonStore = reactive({
  list: [],
  filteredList: computed(() => 
    pokemonStore.list.filter(pokemon => 
      pokemon.pokemon_species.name.includes(filterText.value)
    )
  )
})

const filterText = ref('')

onMounted( async () => {
  const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
    .then( res => res.json() )

  const helloFetch = await fetch('/netlify/functions/hello-world.js').then( res => res.json() )

  console.log({helloFetch})

  pokemonStore.list = pokeData.pokemon_entries
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
