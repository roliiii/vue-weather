<template>
  <div>
    Key: <input :value="key" type="text" name="key" @input="updateKey" placeholder="weather api key">
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name:'Settings',
  computed: {
    ...mapState({
      key: state => state.key
    })
  },
  methods: {
    updateKey(e) {
      this.$store.commit('setKey', e.target.value)
    }
  }
}
</script>

<style>

</style>
