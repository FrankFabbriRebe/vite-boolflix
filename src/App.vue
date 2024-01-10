<script>

// import components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

// import axios
import axios from 'axios';

// import store
import { store } from './store';

export default {

  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    searchMedia() {
      // metodo per richiamare api filtrata tramite axios
    }
  }

}

console.log(store.movieSearched);

</script>

<template>
  <AppHeader @search="searchMedia" />
  <AppMain />
</template>

<style lang="scss">
// inclusion general.scss
@use "./style/general.scss"
</style>