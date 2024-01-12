<script>

// import components
import AppCard from './AppCard.vue';

// import store
import { store } from '../store';

export default {
    name: "AppMain",

    components: {
        AppCard
    },

    data() {
        return {
            store,

            // contentTypes: [
            //     { list: 'moviesArray', title: 'Movies' },
            //     { type: 'tvSeriesArray', list: 'tvSeriesArray', title: 'TV series' },
            // ],

        }
    },

}

</script>

<template>
    <!-- <div>
        <div v-for="(contentType, i) in contentTypes" :key="i" class="container"
            v-if="store[contentType.list].length !== 0">
            <h1>{{ contentType.title }}</h1>
            <div class="container_movie">
                <AppCard v-for="(media, i) in store[contentType.list]" :key="i" :info="media" :type="contentType.type" />
            </div>
        </div>
    </div> -->

    <!-- movies container -->
    <div class="container" v-if="store.moviesArray.length !== 0">
        <h1>Film</h1>
        <div class="container_movie">
            <AppCard v-for="(element, i) in store.moviesArray" :key="i" :info="element" type="movies" />
        </div>
    </div>

    <!-- tv series container -->
    <div class="container" v-if="store.tvSeriesArray.length !== 0">
        <h1>Serie tv</h1>
        <div class="container_movie">
            <AppCard v-for="(element, i) in store.tvSeriesArray" :key="i" :info="element" type="tvSeries" />
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}

.container_movie {
    width: 80%;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}
</style>
