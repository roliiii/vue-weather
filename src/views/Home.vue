<template>
  <div v-if="apiKey == ''">
    <p class='settingsLink' @click="routeToSettings" >Kérlek állítsd be az api key-t a settings-ben</p>
  </div>
  <div v-else>
    <WeatherForm />
    <weather v-if="isWeatherDataAvailable" />
    <div v-else-if="error!=''">{{error}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherForm from '../components/WeatherForm.vue'
import Weather from '../components/Weather.vue'

export default {

  name: 'Home',
  components: {
    WeatherForm,
    Weather
  },
  methods:{
    routeToSettings(){
      this.$router.push({name: 'Settings'})
    }
  },
  computed: {
    ...mapGetters({
      apiKey: 'getKey',
      isWeatherDataAvailable: 'isWeatherDataAvailable',
      error: 'getError'
    })
  }
}
</script>

<style scoped>
.settingsLink:hover{
  color:black;
  cursor: pointer;
}
</style>
