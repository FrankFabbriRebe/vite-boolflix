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
        }
    },

}

</script>

<template>
    <!-- movies container -->
    <div class="container" v-if="store.moviesArray.length !== 0">
        <h1>Movies</h1>
        <div class="container_movie">
            <AppCard v-for="(element, i) in store.moviesArray" :key="i" :info="element" />
        </div>
    </div>

    <!-- tv series container -->
    <div class="container" v-if="store.tvSeriesArray.length !== 0">
        <h1>TV series</h1>
        <div class="container_movie">
            <AppCard v-for="(element, i) in store.tvSeriesArray" :key="i" :info="element" />
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
