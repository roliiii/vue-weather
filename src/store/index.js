import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const api = Axios.create({
  baseURL:'http://api.weatherstack.com'
})

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
    setWeatherData (state, weatherData) {
      state.weatherData = weatherData
    },
  },
  actions: {
    fetchWeatherData (context, country){
      const params = {query:country, access_key:this.state.key}
      api.get("current", {params})
      .then(res => context.commit('setWeatherData', res.data))
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
