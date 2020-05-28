import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: '',
    key: '',
    weatherData: '',
    errorInfo:''
  },
  mutations: {
    setKey (state, key) {
      state.key = key
    },
    setCountry (state, country) {
      state.country = country
    },
    weatherData (state, weatherData) {
      state.weatherData = weatherData
    },
  },
  actions: {
    fetchWeatherData (context, country){
      const params = {query:country, access_key:this.state.key}
      Axios.get("http://api.weatherstack.com/current", {params})
      .then(res => context.commit('weatherData', res.data))
      .catch(err => {console.log(err)})
    }
  },
  getters: {
    getKey: (state) => {
      return state.key
    },
    isWeatherDataAvailable: (state) => {
      return state.weatherData && !state.weatherData.error
    },
    getCurrentWeather: (state) => {
      return state.weatherData ? state.weatherData : undefined
    },
    getError: (state) => {
      return state.weatherData && state.weatherData.error? state.weatherData.error.info:''
    }
  }
})
