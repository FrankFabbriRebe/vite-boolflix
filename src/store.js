import { reactive } from 'vue'

export const store = reactive({

    // movies section
    apiURLMovies: 'https://api.themoviedb.org/3/search/movie?api_key=46ea676c2ff270a694d3966bc0f52218&language=it-IT',
    moviesArray: [],

    // tv series section
    apiUrlTvSeries: 'https://api.themoviedb.org/3/search/tv?api_key=46ea676c2ff270a694d3966bc0f52218&language=it-IT',
    tvSeriesArray: [],

    textSearched: "",

    // base URL for imgs
    baseUrlImg: "https://image.tmdb.org/t/p/w342",

})