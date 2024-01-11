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

    // method to call filtered api based on user input
    searchMedia() {
      if (store.textSearched !== "") {
        let filteredApiUrlMovies = `${store.apiURLMovies}&query=${store.textSearched}`;
        let filteredApiUrlTvSeries = `${store.apiUrlTvSeries}&query=${store.textSearched}`;

        //axios call for filteredApiUrlMovie
        axios.get(filteredApiUrlMovies)
          .then((response) => {
            // console.log(response.data.results);
            store.moviesArray = response.data.results;
            console.log(store.moviesArray);
          })
          .catch((error) => {
            console.log('Errore nella chiamata API Movies', error);
          });

        // console.log(filteredApiUrlMovies);

        // axios call for filteredApiUrlTvSeries
        axios.get(filteredApiUrlTvSeries)
          .then((response) => {
            // console.log(response.data.results);
            store.tvSeriesArray = response.data.results;
            console.log(store.tvSeriesArray);
          })
          .catch((error) => {
            console.log('Errore nella chiamata API Movies', error);
          });

        // console.log(filteredApiUrlTvSeries);

      } else {
        console.log('Inserisci una stringa di ricerca valida');
      }
    }

  }

}

</script>

<template>
  <AppHeader @search="searchMedia" />
  <AppMain />
</template>

<style lang="scss">
// inclusion general.scss
@use "./style/general.scss"
</style>