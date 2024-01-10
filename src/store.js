import { reactive } from 'vue'

export const store = reactive({

    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=46ea676c2ff270a694d3966bc0f52218&language=it-IT',
    moviesArray: [],
    movieSearched: "",

})