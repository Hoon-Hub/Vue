<template>
  <div class="flex flex-col h-screen max-h-screen">
    <!-- Search / Results-->
    <div class="flex justify-center relative bg-hero-pattern bg-cover px-4 pt-8 pb-32">

      <!-- Search Input -->
      <div class="z-20 w-full max-w-screen-sm">
        <h1 class="text-white text-center text-3xl pb-4">IP Address Tracker</h1>
        <div class="flex">
          <input @click.enter="getIpInfo" v-model="queryIp" class="flex-1 py-3 px-2 rounded-tl-md rounded-bl-md focus:outline-none" type="text" placeholder="Search for any IP adress or leave empty to get your ip info">
          <i
            @click="getIpInfo" 
            class="cursor-pointer bg-black text-white p-4 rounded-tr-md rounded-br-md flex item-center fa-solid fa-chevron-right"></i>
        </div>
      </div>

      <!-- IP Info -->
      <IPInfo v-if="ipInfo" :ipInfo="ipInfo"></IPInfo>

      <!-- Map -->
      <div id="mapid" class="h-full z-10"></div>


    </div>
  </div>
</template>

<script>
import IPInfo from '@/components/IPInfo.vue'
import leaflet from 'leaflet'
import { onMounted, ref } from 'vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    IPInfo
  },
  setup () {
    let mymap 
    const queryIp = ref('')
    const ipInfo = ref(null)

    onMounted(() => {
      mymap = leaflet.map('mapid').setView([51.505, -0.09], 9);

      leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FuZ2hvb25raW0iLCJhIjoiY2t6bXB4engyMWd1NzJvbGx5M3g2OWpqYiJ9.BdNWH-yTIKsia0H_Glj_lA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic2FuZ2hvb25raW0iLCJhIjoiY2t6bXB4engyMWd1NzJvbGx5M3g2OWpqYiJ9.BdNWH-yTIKsia0H_Glj_lA'
      }).addTo(mymap);
    })

    const getIpInfo = async () => {
      try {
        const data = await axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_KqF3bIYtSAYcrc8JZa3vUEHFwmHX3&ipAddress=${queryIp.value}`)
        const result = data.data
        ipInfo.value = {
          address: result.ip,
          country: result.location.country,
          region: result.location.region,
          timezone: result.location.timezone,
          domain: result.as.domain,
          isp: result.isp
        }
        // leaflet.marker([ipInfo.value.lat, ipInfo.value.lng]).addTo(mymap);
        // mymap.setView([ipInfo.value.lat, ipInfo.value.lng], 13) 

      } catch (err) {
        alert(err.message)
      }
    }

    return { queryIp, ipInfo, getIpInfo }
  }
}
</script>
