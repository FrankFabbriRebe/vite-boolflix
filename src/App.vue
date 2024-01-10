<script>

// import components
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

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

}

console.log(store.movieSearched);

</script>

<template>
  <AppHeader />
  <!-- <AppHeader @search="searchMedia" /> -->
  <AppMain />
</template>

<style lang="scss">
// inclusion general.scss
@use "./style/general.scss"
</style>