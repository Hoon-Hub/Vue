<template>
  <div class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2] flex gap-4 px-6 py-8 md:px-0 md:py-0 bg-transparent">
    <!-- Search -->
    <div class="relative flex-1 md:min-w-[350px]">
        <!-- input -->
        <input 
            @focus="$emit('toggleSearchResults')"
            @input="search"
            v-model="searchQuery"
            class="pl-9 pr-4 py-3 text-sm focus:outline-none w-full shadow-md rounded-md" type="text" placeholder="Start your search.."
            >
        <!-- Search Icon -->
        <div class="absolute top-0 left-[8px] h-full flex items-center">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <!-- Search Results -->
        <div class="absolute mt-2 w-full">
            <!-- Results -->
            <div
                v-if="searchQuery && searchResults" 
                class="h-[200px] overflow-scroll bg-white rounded-md">

                <!-- loading -->
                <loading-spinner v-if="!searchData"/>
                <div v-else>
                    <div 
                        @click="selectResult(result)"
                        v-for="(result, index) in searchData" :key="index"
                        class="px-4 py-2 flex gap-x-2 cursor-pointer hover:bg-slate-600 hover:text-white">
                        <i class="fa-solid fa-location-pin"></i>
                        <p class="text-xs">{{ result.place_name_en }}</p>
                    </div>
                </div>
            </div>

            <!-- Selected Search Result -->
            <div 
                v-if="selectedResult"
                class="mt-2 px-4 py-3 bg-white rounded-md" 
                >
                <i @click="removeResult" class="fa-solid fa-circle-xmark flex jusify-end"></i>
                <h1 class="text-lg">
                    {{ selectedResult.text }}
                </h1>
                <p class="text-xs mb-1">
                    {{ selectedResult.properties.address }},
                    {{ selectedResult.city }},
                    {{ selectedResult.state }}
                </p>
                <p class="text-xs">
                    {{ selectedResult.properties.category }}
                </p>
            </div>
        </div>
    </div>

    <!-- Geo location -->
     <div
        @click="$emit('getGeolocation')" 
        :class="{ 'bg-slate-600' : coords }"
        class="px-4 bg-white flex items-center shadow-md rounded-md min-h-[45px]">
         <i 
            :class="{ 'text-white': coords, 'animate-pulse': fetchCoords }"
            class="fa-solid fa-location-arrow text-slate-600 text-[18px]"></i>
     </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import loadingSpinner from '@/components/loadingSpinner'

export default {
    props: ['coords', 'fetchCoords', 'searchResults'],
    components: {
        loadingSpinner
    },
    setup (props, { emit }) {
        const searchQuery = ref(null)
        const searchData = ref(null)
        const queryTimeout = ref(null)
        const selectedResult = ref(null)

        const search = () => {
            clearTimeout(queryTimeout.value)

            searchData.value = null

            queryTimeout.value = setTimeout( async () => {
                if (searchQuery.value !== '') {
                    const params = new URLSearchParams({
                        fuzzyMatch: true,
                        language: 'en',
                        limit: 10,
                        proximity: props.coords ? `${props.coords.lng},${props.coords.lat}` : '0,0'
                    })

                    // 개발할 때 주소
                    // const getData = await axios.get(`http://localhost:3000/api/search/${searchQuery.value}?${params}`)

                    // 배포 때 주소
                    const getData = await axios.get(`api/search/${searchQuery.value}?${params}`)

                    searchData.value = getData.data.features
                    console.log(searchData.value)
                }
            }, 600)
        }

        const selectResult = (result) => {
            selectedResult.value = result
            emit('plotResult', result.geometry);
        }

        const removeResult = () => {
            selectedResult.value = null
            emit('removeResult')
        }

        return { searchQuery, searchData, queryTimeout, search, selectResult, selectedResult, removeResult  }
    }

}
</script>
