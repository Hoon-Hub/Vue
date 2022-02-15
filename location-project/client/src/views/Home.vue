<template>
  <div class="h-screen relative">
    <geo-error-modal 
      v-if="geoError" 
      :geoErrorMessage="geoErrorMessage" 
      @closeGeoError="closeGeoError"
    />
    <map-features 
      class="w-full md:w-auto absolute md:top-[40px] md:left-[60px] z-[2]"
      :coords="coords"
      :fetchCoords="fetchCoords" 
      :searchResults="searchResults"
      @getGeolocation="getGeolocation"
      @plotResult="plotResult" 
      @toggleSearchResults="toggleSearchResults" 
      @removeResult="removeResult"
    />
    <div id="map" class="h-full z-[1]"></div>
  </div>
</template>

<script>
import leaflet from 'leaflet'
import { onMounted, ref } from 'vue'
import GeoErrorModal from '@/components/GeoErrorModal'
import MapFeatures from '@/components/MapFeatures'

export default {
  name: 'Home',
  components: {
    GeoErrorModal,
    MapFeatures
  },
  setup () {
    let map
    onMounted ( () => {
      // init map
      map = leaflet.map('map').setView([51.505, -0.09], 10)

      leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_API_KEY}`, {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.VUE_APP_API_KEY
      }).addTo(map);

      map.on('moveend', () => {
        closeSearchResults()
      })
      getGeolocation()
    })

    const coords = ref(null)
    const fetchCoords = ref(null) // loading animation
    const geoMarker = ref(null) // marker
    const geoError = ref(null)
    const geoErrorMessage = ref(null)


    const getGeolocation = () => {
      // check coords has valuse
      if (!coords.value) {
        // check session storage for coords
        if (sessionStorage.getItem('coords')) {
          coords.value = JSON.parse(sessionStorage.getItem('coords'))
          plotGeolocation(coords.value)
          return ;
        }

        fetchCoords.value = true;
        navigator.geolocation.getCurrentPosition(setCoords, getLocError);
        return;
      }

      // otherwise, remove location
      coords.value = null;
      sessionStorage.removeItem("coords");
      map.removeLayer(geoMarker.value);
    }

    const setCoords = (pos) => {
      // stop fetching coords
      fetchCoords.value = null

      // set coords in session storage
      const setSessionCoords = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      }

      sessionStorage.setItem('coords', JSON.stringify(setSessionCoords))

      // set ref coords value
      coords.value = setSessionCoords

      plotGeolocation(coords.value)
    }

    // error handler
    const getLocError = (err) => {
      fetchCoords.value = null
      geoError.value = true
      geoErrorMessage.value = err.message
    }

    const plotGeolocation = () => {
      // create custom marker
      const customMarker = leaflet.icon({
        iconUrl: require('@/assets/map-marker-red.svg'),
        iconSize: [35, 35]
      })

      // create new marker with coords and custom icon
      geoMarker.value = leaflet
        .marker([coords.lat, coords.lng], { icon: customMarker })
        .addTo(map)

      // set map view to current location
      map.setView([coords.lat, coords.lng], 10)
    }

    // 1개의 결과를 클릭했을 때
    const resultMarker = ref(null)
    const plotResult = (coords) => {
      // If there is already a marker, remove it. Only allow 1
      if (resultMarker.value) {
        map.removeLayer(resultMarker.value);
      }
      const customMarker = leaflet.icon({
        iconUrl: require("../assets/map-marker-blue.svg"),
        iconSize: [35, 35], // size of the icon
      });
      resultMarker.value = leaflet
        .marker([coords.coordinates[1], coords.coordinates[0]], { icon: customMarker })
        .addTo(map);
      map.setView([coords.coordinates[1], coords.coordinates[0]], 13);
    };


    const removeResult = () => {
      map.removeLayer(resultMarker.value) 
    }

    const closeGeoError = () => {
      geoError.value = null
      geoErrorMessage.value = null
    }

    const searchResults = ref(null)
    const toggleSearchResults = () => {
      searchResults.value = !searchResults.value
    }
    const closeSearchResults = () => {
      searchResults.value = null
    }

    return {
      geoError,
      closeGeoError,
      geoErrorMsg,
      fetchCoords,
      coords,
      getGeolocation,
      plotResult,
      searchResults,
      toggleSearchResults,
      closeSearchResults,
      removeResult,}
  }
}
</script>
