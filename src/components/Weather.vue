<template>
  <div>
      <img :src="weather.current.weather_icons">
      <p>ountry: {{weather.location.country}}</p>
      <p>Temp: {{weather.current.temperature}}°C</p>
      <p>Humidity: {{weather.current.humidity}}%</p>
      <p>UV: {{weather.current.uv_index}}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:"Weather",
  computed: {
    ...mapGetters({
      weather: 'getCurrentWeather'
    })
  }
}
</script>

<style>

</style>