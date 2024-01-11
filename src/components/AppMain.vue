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
    <div class="container" v-if="store.moviesArray.length !== 0">
        <h1>Film</h1>
        <div class="container_movie">
            <AppCard />
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
