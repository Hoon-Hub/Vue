<template>
  <h1>Twitch Pokedex</h1>
  <pokedex-card></pokedex-card>
  <input type="text" v-model="filterText">
  <p>Filter Text: {{ filterText }}</p>
  <ul>
    <li v-for="(pokemon, index) in pokemonStore.filteredList" :key="`poke-${index}`">
      #{{ pokemon.entry_number }} - {{ pokemon.pokemon_species.name }}
    </li>
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

  pokemonStore.list = pokeData.pokemon_entries
})





  // export default {
  //   data: () => ({
  //     pokemonList: []
  //   }),
  //   async mounted() {
  //     const pokeData = await fetch('https://pokeapi.co/api/v2/pokedex/2/')
  //       .then(res => res.json()
  //       )

  //       this.pokemonList = pokeData.pokemon_entries

  //     console.log({ pokeData })
  //   }
  // }

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
