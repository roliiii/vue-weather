<template>
  <div>
      <form @submit.prevent="getWeather">
          <input type="text" name="country" v-model="country">
          <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
export default {
    name: 'WeatherForm',
    data() {
        return {
        }
    }, 
    methods: {
        getWeather() {
            this.$store.dispatch("fetchWeatherData", this.country)
        }
    },
    computed:{
        country: {
            get(){
                return this.$store.state.country
            },
            set(value){
                this.$store.commit("setCountry", value)
            }
        }
    }
}
</script>