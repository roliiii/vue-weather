<template>
  <div>
      <form @submit="getWeather">
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
        getWeather(e) {
            e.preventDefault()
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